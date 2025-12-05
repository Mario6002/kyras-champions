import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Kyra's Champions — All rights reserved.</p>
      <p>
        <a href="https://github.com/mario6002/kyras-champions" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </footer>
  );
}
