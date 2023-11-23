import React, { useState } from "react";
import "./UserPage.css";

export default function UserPage() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul>
        <li>
          <a
            className={activeTab === "home" ? "active" : ""}
            onClick={() => handleTabClick("home")}
            href="#home"
          >
                      <span>Trang chủ</span>

          </a>

        </li>
        <li>
          <a
            className={activeTab === "news" ? "active" : ""}
            onClick={() => handleTabClick("news")}
            href="#news"
          >
            Quản lý
          </a>
        </li>
        <li>
          <a
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => handleTabClick("contact")}
            href="#contact"
          >
            Tra cứu
          </a>
        </li>
        <li>
          <a
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabClick("about")}
            href="#about"
          >
            About
          </a>
        </li>
      </ul>

      <div className="main">
        {activeTab === "home" && (
          <h2>Nội dung của Trang chủ sẽ được hiển thị ở đây</h2>
        )}
        {activeTab === "news" && (
          <h2>Nội dung của Quản lý sẽ được hiển thị ở đây</h2>
        )}
        {activeTab === "contact" && (
          <h2>Nội dung của Tra cứu sẽ được hiển thị ở đây</h2>
        )}
        {activeTab === "about" && (
          <h2>Nội dung của About sẽ được hiển thị ở đây</h2>
        )}
        {/* Thêm các thành phần khác tương ứng với các tab khác */}
      </div>
    </div>
  );
}
