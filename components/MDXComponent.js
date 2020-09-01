import { MDXProvider } from '@next/mdx';
const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: 'tomato' }} {...props} />,
};
export default (props) => (
  <MDXProvider components={components}>
    <main {...props}></main>
  </MDXProvider>
);
