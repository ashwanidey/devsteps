import React from 'react';
import { SandpackFilesProvider } from './SandpackFilesProvider';
import { FileTreeExplorer } from './FileTreeExplorer';
export {
  useSandpackFiles,
  SandpackFilesProvider,
} from './SandpackFilesProvider';

export const SandpackFileTree = () => (
  <div
    style={{
      minWidth: 200,
      maxWidth: '300px',
      overflow: 'hidden',
      backgroundColor: '#0b0e14',
    }}
  >
    <FileTreeExplorer />
  </div>
);

type Props = {
  onMoveFile?: ((fileMap: Record<string, string>) => void) | undefined;
};
const  SandpackFileExplorer = (props: Props) => (
  <SandpackFilesProvider {...props}>
    <SandpackFileTree />
  </SandpackFilesProvider>
);

export default SandpackFileExplorer;

// import React, { FC, HTMLAttributes, ReactChild } from 'react';

// export interface Props extends HTMLAttributes<HTMLDivElement> {
//   /** custom content, defaults to 'the snozzberries taste like snozzberries' */
//   children?: ReactChild;
// }

// // Please do not use types off of a default export module or else Storybook Docs will suffer.
// // see: https://github.com/storybookjs/storybook/issues/9556
// /**

// export const Thing: FC<Props> = ({ children }) => {
//   return <div>{children || `the snozzberries taste like snozzberries`}</div>;
// };
