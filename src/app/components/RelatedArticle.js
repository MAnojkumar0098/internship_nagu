import Image from "next/image";
import Link from "next/link";

const RelatedArticles = () => {
  return (
    <div className="otherBlog">
      <h2 className="m-1">People Also Read This</h2>
          <Link href="/blogpost">
                <h3>Typing</h3>
                <p className="m-1"></p>
          </Link>
        </div>
  );
};

export default RelatedArticles;
