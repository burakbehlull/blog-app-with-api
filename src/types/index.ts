interface TiptapEditorProps {
  onSave?: (content: string) => void;
  onShow?: (content: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

interface IPost {
	title: string,
	author: string;
	views: number;
	publishedAt: string;
	content: string,

}

export {
	IPost,
	TiptapEditorProps,
	ProviderProps
}