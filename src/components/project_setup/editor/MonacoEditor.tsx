
import Editor from "@monaco-editor/react";


import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  Sandpack,
} from "@codesandbox/sandpack-react";

export default function MonacoEditor({setShowExplorer, showExplorer} : {
  setShowExplorer : React.Dispatch<React.SetStateAction<boolean>>,
  showExplorer: boolean
}) {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  const handleShowExplorer = () => {
    setShowExplorer(prev => !prev);
  }
  const handleEditorWillMount = (monaco  : any) => {
    // Define the dark elegant theme
    monaco.editor.defineTheme('darkElegant', {
      
        "base": "vs-dark",
        "inherit": true,
        "rules": [
          { "token": "", "foreground": "565b66" },
          { "token": "comment", "foreground": "bfbdb6" },
          { "token": "keyword", "foreground": "e6b450" },
          { "token": "identifier", "foreground": "409fff" },
          { "token": "string", "foreground": "e1af4b" },
          { "token": "number", "foreground": "d95757" },
          { "token": "operator", "foreground": "bfbdb6" },
          { "token": "function", "foreground": "e6b450" },
          { "token": "type", "foreground": "39bae6" },
        ],
        "colors": {
          "editor.foreground": "#565b66",
          "editor.background": "#0b0e14",
          "editor.selectionBackground": "#409fff4d",
          "editor.lineHighlightBackground": "#0f131a",
          "editorCursor.foreground": "#e6b450",
          "editorWhitespace.foreground": "#565b6680",
          "editorIndentGuide.background": "#565b6680",
          "editorIndentGuide.activeBackground": "#565b66",
          "editorLineNumber.foreground": "#565b66",
          "editorLineNumber.activeForeground": "#e6b450",
          "editorGutter.addedBackground": "#39bae6",
          "editorGutter.modifiedBackground": "#ffb454",
          "editorGutter.deletedBackground": "#d95757",
          "editorError.foreground": "#d95757",
          "editorWarning.foreground": "#ffb454",
          "editorInfo.foreground": "#39bae6",
          "input.background": "#0d1017",
          "input.foreground": "#bfbdb6",
          "input.placeholderForeground": "#565b6680",
          "input.border": "#565b6645",
          "button.background": "#e6b450",
          "button.foreground": "#0b0e14",
          "button.hoverBackground": "#e1af4b",
          "dropdown.background": "#0d1017",
          "dropdown.foreground": "#565b66",
          "dropdown.border": "#565b6645",
          "badge.background": "#e6b45033",
          "badge.foreground": "#e6b450",
          "scrollbarSlider.background": "#565b6666",
          "scrollbarSlider.hoverBackground": "#565b6699",
          "scrollbarSlider.activeBackground": "#565b66b3",
          "widget.shadow": "#00000080",
          "focusBorder": "#e6b450b3"
        }
    });
  };

  return (
    <SandpackStack style={{ margin: 0 }} className="h-full bg-[#0d0f12] ">
      <div className="flex items-center ">
        <button onClick={() => handleShowExplorer()} className="pl-4"> {!showExplorer ?<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="white">
    <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
</svg> : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
}</button>
      <FileTabs closableTabs={true} className="bg-[#0d0f12]"/>
      </div>
      <div style={{ flex: 1}} className="pt-2 bg-[#0b0e14]">
        <Editor
          width="100%"
          height="100%"
          language="javascript"
          theme="darkElegant"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
          beforeMount={handleEditorWillMount}
          options={{
            fontSize: 14,
            // fontFamily: "Jetbrains-Mono",
            fontLigatures: true,
            wordWrap: "on",
            minimap: {
              enabled: false,
            },
            bracketPairColorization: {
              enabled: true,
            },
            cursorBlinking: "expand",
            formatOnPaste: true,
            suggest: {
              showFields: false,
              showFunctions: false,
            },
            
            scrollbar: {
                vertical:"hidden",
                horizontal: "hidden",
                // handleMouseWheel:false,
            },
            
          }}
          
          
        />
      </div>
    </SandpackStack>
  );
}
