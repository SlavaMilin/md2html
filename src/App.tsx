import beautify from "js-beautify";
import React, { Component } from "react";
import { connect } from "react-redux";
import showdown from "showdown";
import Typograf from "typograf";
import { IState } from "./redusers";

const tp = new Typograf({ locale: ["ru", "en-US"] });
tp.disableRule("common/punctuation/hellip");

interface IProps {
  html: string;
  onConvertBtnClick: (html: string) => void;
}

const classMap: { [key: string]: string } = {
  table: "table table-striped table-bordered"
};

const bindings: any = Object.keys(classMap).map(key => ({
  regex: new RegExp(`<${key}(.*)>`, "g"),
  replace: `<${key} class="${classMap[key]}" $1>`,
  type: "output"
}));

const hrefs: any = () => ({
  regex: /<a href="#(.+)">/g,
  replace: (wn: string, href: string) => {
    return `<a href="#${href}" id="${href}">`;
  },
  type: "output"
});

const tabs: any = () => ({
  regex: /<p>(###[\w\-]+)<\/p>/g,
  replace: (wn: string, tab: string) => tab,
  type: "output"
});

const converter = new showdown.Converter({
  customizedHeaderId: true,
  disableForced4SpacesIndentedSublists: true,
  extensions: [...bindings, hrefs, tabs],
  ghCompatibleHeaderId: true,
  headerLevelStart: 3,
  requireSpaceBeforeHeadingText: true,
  tables: true
});

const extractMarkdownToHtml = (markdown: string): string => {
  const html = converter.makeHtml(markdown);
  const typographyHtml = tp.execute(html);
  return beautify.html(typographyHtml, { indent_size: 2 });
};

class App extends Component<IProps> {
  private textarea = React.createRef<HTMLTextAreaElement>();

  public componentDidMount(): void {
    this.onConvertBtnClick();
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
                defaultValue="# Тестовый заголовок"
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
    const markdown = this.textarea.current!.value;
    const html = extractMarkdownToHtml(markdown);
    this.props.onConvertBtnClick(html);
  };
}

const mapStateToProps = (state: IState) => ({
  html: state.html
});

export default connect<any, any, any, any>(
  mapStateToProps,
  dispatch => ({
    onConvertBtnClick: (html: string) => {
      dispatch({ type: "HTML_MARKUP", payload: html });
    }
  })
)(App);
