import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownContent = ({ content }) => {
  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

MarkdownContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownContent;
