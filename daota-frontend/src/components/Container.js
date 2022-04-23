export default function Container(props) {
  const { children, addClasses = '' } = props;
  return <div className={`py-4 px-6 ${addClasses}`}>{children}</div>;
}
