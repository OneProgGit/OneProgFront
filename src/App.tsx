import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Code, GitBranch, GitCommit } from "lucide-react"

function App() {
  return (
    <div className="flex flex-col gap-4 m-4">
      <h1 className="text-shadow-md font-semibold text-4xl">
        { "OneProg" }
      </h1>

      <Separator />

      <div className="flex gap-2">
        <Button className="w-30 shadow-md" onClick={() => {
          window.open("https://code.oneprog.org");
        }}>
          <Code />
          { "Контест" }
        </Button> 

        <Button className="w-30 shadow-md" onClick={() => {
          window.open("https://github.com/OneProgGit");
        }}>
          <GitCommit />
          { "Github" }
        </Button> 

        <Button className="w-30 shadow-md" onClick={() => {
          window.open("https://gitea.oneprog.org");
        }}>
          <GitBranch />
          { "Gitea" }
        </Button> 
      </div>
    </div>
  )
}

export default App
