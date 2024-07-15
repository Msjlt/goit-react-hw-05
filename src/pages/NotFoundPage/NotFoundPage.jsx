import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <Link to="/">Перейти на главную</Link>
    </div>
  );
}
