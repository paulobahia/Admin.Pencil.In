import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, Toolbar } from "@/components/ui/toolbar"
import { Editor } from "@tiptap/react"
import { Bold, Italic, Strikethrough, Undo, Redo } from "lucide-react"

interface ToolbarProps {
  editor: Editor
}

export const ToolbarEditor: React.FC<ToolbarProps> = ({ editor }) => {
  return (
    <Toolbar className="flex items-center justify-between p-2 m-0" aria-label="Formatting options">
      <ToggleGroup className="flex flex-row items-center" type="multiple">
        <Toggle
          size="sm"
          className="mr-1"
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          pressed={editor.isActive("bold")}>
          <Bold className="w-4 h-4" />
        </Toggle>

        <Toggle
          size="sm"
          className="mr-1"
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          pressed={editor.isActive("italic")}
          value="italic">
          <Italic className="w-4 h-4" />
        </Toggle>

        <Toggle
          size="sm"
          className="mr-1"
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          pressed={editor.isActive("strike")}>
          <Strikethrough className="w-4 h-4" />
        </Toggle>
      </ToggleGroup>

      <ToggleGroup className="flex flex-row items-center invisible sm:visible" type="multiple">
        <Toggle
          size="sm"
          className="mr-1"
          onPressedChange={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}>
          <Undo className="w-4 h-4" />
        </Toggle>

        <Toggle
          size="sm"
          className="mr-1"
          onPressedChange={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}>
          <Redo className="w-4 h-4" />
        </Toggle>
      </ToggleGroup>
    </Toolbar>
  )
}