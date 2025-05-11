
import React, { useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Play, Download, Save, Copy, Trash2, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { editors } from "@/data/editors";

const Editor = () => {
  const [selectedEditor, setSelectedEditor] = useState(editors[0]);
  const [code, setCode] = useState(selectedEditor.defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleEditorChange = (editorId: string) => {
    const editor = editors.find(e => e.id === editorId) || editors[0];
    setSelectedEditor(editor);
    setCode(editor.defaultCode);
    setOutput("");
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("Running code...\n");
    
    // Simulate code execution with a delay
    setTimeout(() => {
      setOutput(prev => prev + "\n✅ Code executed successfully!\n\n📋 Output:\n-----------------\n");
      
      // Add simulated output based on editor type
      if (selectedEditor.id === "javascript") {
        setOutput(prev => prev + "Welcome to CodeVerseLab JavaScript Editor!\n" +
          "Factorial of 1 is: 1\n" +
          "Factorial of 2 is: 2\n" +
          "Factorial of 3 is: 6\n" +
          "...\n" +
          "Even numbers: [2, 4, 6, 8, 10]\n" +
          "Squared numbers: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n" +
          "Sum of numbers: 55\n" +
          "Hello, my name is Coding Explorer and I'm 25 years old.\n" +
          "My skills are: JavaScript, HTML, CSS, React, Node.js"
        );
      } else if (selectedEditor.id === "python") {
        setOutput(prev => prev + "Welcome to CodeVerseLab Python Editor!\n" +
          "First 10 Fibonacci numbers:\n" +
          "fibonacci(0) = 0\n" +
          "fibonacci(1) = 1\n" +
          "fibonacci(2) = 1\n" +
          "...\n" +
          "Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n" +
          "Even numbers: [2, 4, 6, 8, 10]\n" +
          "Name: Python Explorer\n" +
          "Age: 25\n" +
          "Skills: Python, Django, Flask, NumPy, Pandas\n" +
          "Circle area: 78.54\n" +
          "Circle circumference: 31.42"
        );
      } else {
        setOutput(prev => prev + "Code executed successfully!\nCheck the preview panel to see the results.");
      }
      
      setIsRunning(false);
    }, 1500);
  };

  const handleClearCode = () => {
    if (confirm("Are you sure you want to clear all code?")) {
      setCode("");
      setOutput("");
    }
  };

  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `codeverse-${selectedEditor.id}-code.${selectedEditor.mode}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen cosmic-bg">
      <StarryBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-6 inline-block">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon-green/20 border border-neon-green/40">
              <Code className="h-6 w-6 text-neon-green" />
            </div>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            Code <span className="gradient-text">Editor</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Write, execute, and test code in multiple programming languages with our interactive editor.
          </p>
        </div>

        <div className="cosmic-card p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/4">
              <h2 className="font-orbitron text-xl mb-4">Select Language</h2>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {editors.map((editor) => (
                  <Button
                    key={editor.id}
                    variant={selectedEditor.id === editor.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleEditorChange(editor.id)}
                  >
                    <span className="mr-2">{editor.title}</span>
                  </Button>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-orbitron text-lg mb-2">Documentation</h3>
                <a 
                  href={selectedEditor.documentationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center justify-center w-full"
                >
                  View Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-6">
                <h3 className="font-orbitron text-lg mb-2">Actions</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleRunCode}
                    disabled={isRunning}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Run Code
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleClearCode}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Code
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleCopyCode}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleDownloadCode}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Code
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-orbitron text-xl">{selectedEditor.title} Editor</h2>
                <div className="flex items-center">
                  <span className="text-xs text-gray-400 mr-2">Theme: Dark</span>
                  <Button size="sm" variant="outline" className="h-8" onClick={handleRunCode} disabled={isRunning}>
                    {isRunning ? "Running..." : "Run Code"}
                    <Play className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row h-[600px] gap-4">
                <div className="w-full lg:w-1/2 h-full">
                  <div className="code-editor h-full">
                    <div className="bg-galactic-dark p-2 border-b border-neon-blue/30 flex items-center justify-between">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400">{selectedEditor.mode.toUpperCase()} Editor</span>
                    </div>
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-[calc(100%-32px)] bg-[#1e1e1e] text-gray-200 font-mono p-4 outline-none resize-none"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 h-full">
                  <Tabs defaultValue="output">
                    <TabsList className="w-full">
                      <TabsTrigger value="output" className="w-1/2">Output</TabsTrigger>
                      <TabsTrigger value="preview" className="w-1/2">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="output" className="h-[calc(600px-40px)] m-0">
                      <div className="terminal-panel h-full overflow-auto">
                        <pre className="text-green-400 whitespace-pre-wrap">{output || "// Run your code to see the output here"}</pre>
                      </div>
                    </TabsContent>
                    <TabsContent value="preview" className="h-[calc(600px-40px)] m-0">
                      {selectedEditor.id === 'html-css-js' ? (
                        <div className="h-full border border-neon-blue/30 bg-white">
                          <iframe 
                            title="Preview" 
                            srcDoc={code}
                            className="w-full h-full"
                            sandbox="allow-scripts"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="cosmic-card h-full flex items-center justify-center">
                          <p className="text-center text-gray-400">
                            Preview is only available for HTML/CSS/JS editor.<br />
                            Use the Output tab to see your code results.
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cosmic-card p-6">
          <h2 className="font-orbitron text-2xl mb-6 text-center">Popular Code Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editors.slice(0, 3).map((editor) => (
              <div key={editor.id} className="cosmic-card p-4 hover:border-neon-blue/50 transition-all duration-300">
                <h3 className="font-orbitron text-lg mb-2">{editor.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{editor.description}</p>
                <Button 
                  className="cyber-button w-full"
                  onClick={() => handleEditorChange(editor.id)}
                >
                  Open Template
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
