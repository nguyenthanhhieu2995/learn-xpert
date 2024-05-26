import Button from "./Button";
import { useEffect } from "react";
import { useState } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface Albums {
  userId: number;
  id: number;
  title: string;
}
const tabs = ["posts", "todos", "albums"];

export default function ShowInfo() {
  const [activeTab, setActiveTab] = useState<string>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    (activeTab && fetch(`https://jsonplaceholder.typicode.com/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        if (activeTab === "posts") {
          setPosts(data);
        } else if (activeTab === "todos") {
          setTodos(data);
        } else if (activeTab === "albums") {
          setAlbums(data);
        }
      }))
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setShowGoToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {//cleanup function
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        {tabs.map((tab) => (
          <Button key={tab} text={tab} onClick={() => setActiveTab(tab)} />
        ))}
      </div>
      <ul className="list-disc list-inside ">
        {activeTab === "posts" &&
          posts.map((post) => <li key={post.id}>{post.title}</li>)}
        {activeTab === "todos" &&
          todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        {activeTab === "albums" &&
          albums.map((album) => <li key={album.id}>{album.title}</li>)}
      </ul>

      {showGoToTop && (
        <button className="right-[20px] bottom-[20px] fixed">Go to top</button>
      )}
    </div>
  );
}
