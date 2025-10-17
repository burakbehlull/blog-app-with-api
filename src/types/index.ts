interface TiptapEditorProps {
  onSave?: (content: string) => void;
  onShow?: (content: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export {
	TiptapEditorProps,
	ProviderProps
}