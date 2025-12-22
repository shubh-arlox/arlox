// components/RichText.jsx
export default function RichText({ content }) {
  if (!content) return null;

  return (
    <div 
      className="prose prose-lg max-w-none text-gray-600
        /* Headings */
        prose-headings:font-bold prose-headings:text-gray-800
        /* Links */
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        /* Images (Neumorphic Style) */
        prose-img:rounded-3xl prose-img:border-4 prose-img:border-[#e0e5ec]
        prose-img:shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]
        /* Blockquotes */
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-200/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:italic
      "
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}