import React, { Component } from "react";
import { connect } from "react-redux";
import showdown from "showdown";

interface IProps {
  html: string;
  onConvertBtnClick: any;
}

const classMap: { [key: string]: string } = {
  table: "table table-striped table-bordered"
};

const bindings: any = Object.keys(classMap).map(key => ({
  regex: new RegExp(`<${key}(.*)>`, "g"),
  replace: `<${key} class="${classMap[key]}" $1>`,
  type: "output"
}));

const converter = new showdown.Converter({
  disableForced4SpacesIndentedSublists: true,
  extensions: [...bindings],
  headerLevelStart: 3,
  tables: true
});

showdown.setFlavor("github");

class App extends Component<IProps> {
  private textarea = React.createRef<HTMLTextAreaElement>();

  public componentDidMount(): void {
    this.props.onConvertBtnClick(
      converter.makeHtml(this.textarea.current!.value)
    );
  }

  public render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center mb-3 mt-3">Конвертер из md в html.</h3>
          <div className="row">
            <div className="col-6">
              <h4 className="text-center">Вставьте md</h4>
              <button
                className="btn btn-primary mb-2"
                onClick={this.onConvertBtnClick}
              >
                Сконвертировать
              </button>
              <textarea
                className="form-control"
                rows={20}
                ref={this.textarea}
                defaultValue="#Тестовый заголовок"
              />
            </div>
            <div className="col-6">
              <h4 className="text-center">Результат:</h4>
              <button className="btn btn-primary float-right mb-2">
                Скопировать
              </button>
              <textarea
                rows={20}
                className="form-control"
                value={this.props.html}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onConvertBtnClick = () => {
    this.props.onConvertBtnClick(
      converter.makeHtml(this.textarea.current!.value)
    );
  };
}

export default connect<any, any, any, any>(
  state => ({
    html: state.html
  }),
  dispatch => ({
    onConvertBtnClick: (html: any) => {
      dispatch({ type: "HTML_MARKUP", payload: html });
    }
  })
)(App);
