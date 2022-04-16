import React from "react";
import Avvvatars from "avvvatars-react";
import { Rate } from "antd";

import Button from "../../components/Button/Button.component";
import Navbar from "../../components/Navbar/Navbar.component";
import NavbarMobile from "../../components/Navbar/NavbarMobile.component";

import BookDemo6 from "../../assets/images/book-demo-6.jpg";
import Cart from "../../assets/icons/icon-shopping-bag--add-light.svg";
import Arrow from "../../assets/icons/icon-arrow--button.svg";
import Bookshelf from "../../assets/images/bookshelf--small.png";

import "./BookDetail.styles.scss";

//Chưa có api thì test ui bằng fake data
const fakeBookDetail = {
  id: "71f43562-b554-11ec-b909-0242ac120002",
  name: "Bảo tàng ngây thơ",
  author: "Orhan Pamuk",
  translator: "Giáp Văn Chung",
  description:
    "ISTANBUL. Mùa xuân tuyệt đẹp năm 1975. Xã hội trưởng giả Âu hóa Istanbul háo hức với lễ đính hôn của Kemal và Sibel dòng dõi thế gia. Nhưng cuộc tái ngộ tình cờ cùng cô em họ xa nghèo, xinh đẹp Fusun dường như đã dứt lìa Kemal khỏi thế giới anh đang thuộc về. Suốt 8 năm đeo đuổi Fusun, Kemal miệt mài sưu tập các đồ vật níu giữ thời gian, lập nên Bảo tàng thơ ngây như một biên niên sử tin cậy về Fusun- tình yêu sầu muộn của anh. Ở đó, Kemal đắm đuối trong quá khứ đau đớn khôn nguôi, hạnh phúc tột cùng, giữa các hiện vật thấm đẫm hoài niệm, lùi sâu vào một Istanbul đa dạng bản sắc và biến động trong dòng lịch sử dần xuôi chảy đến phương Tây.\n" +
    "\n" +
    "BẢO TÀNG NGÂY THƠ- tiểu thuyết đầu tiên Orhan Pamuk hoàn thành sau khi được trao giải Nobel Văn chương 2006, một khảo sát ỉ mỉ, đầy xúc động về bản chất của sự lãng mạn, xứng đáng là kiệt tác mở đầu cho chặng đường thế kỷ 21 của văn học thế giới.",
  categories: ["Tiểu thuyết", "Lãng mạn", "Văn học nước ngoài"],
  image: BookDemo6,
  price: "155000",
  sellerId: "75e1f916-b554-11ec-b909-0242ac120002",
  sellerName: "Nhà sách Tuổi Trẻ",
  sellerImage: null,
  rating: 3.5,
  reviews: [
    {
      userId: "",
      userName: "",
      userImage: "",
      rating: 5.0,
      review: "",
    },
  ],
};

const BookDetail = () => {
  //Khi nào có api thì dùng useParam hook để lấy id sách từ url, tạm thời đang để fake data

  return (
    <>
      {window.matchMedia("(max-width: 1024px)").matches ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}

      <div className="book-detail">
        <div className="book-detail--left">
          <div className="book-detail__image-container">
            <img
              className="book-detail__image"
              src={fakeBookDetail.image}
              alt="book-cover"
            />
          </div>

          <div className="book-detail__background">
            <img src={Bookshelf} alt="bookshelf-background" />
          </div>
        </div>

        <div className="book-detail--right">
          <div className="book-detail__header">
            <h3 className="book-detail__title">{fakeBookDetail.name}</h3>
            <div className="book-detail__icon heart" />
          </div>

          <div className="book-detail__info">
            <p>
              Tác giả:{" "}
              <a style={{ fontWeight: "bold" }}>
                <span>{fakeBookDetail.author}</span>
              </a>
            </p>
            <p>
              Dịch giả:{" "}
              <a>
                <span>{fakeBookDetail.translator}</span>
              </a>
            </p>
            <div>
              Thể loại:{" "}
              {fakeBookDetail.categories.map((category, index) =>
                index === fakeBookDetail.categories.length - 1 ? (
                  <span key={index}>
                    <a>
                      <span key={index}>{category}</span>
                    </a>
                  </span>
                ) : (
                  <span key={index}>
                    <a>
                      <span key={index}>{category}</span>
                    </a>
                    {", "}
                  </span>
                )
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Shop:{" "}
              <a>
                <span className="book-detail__seller">
                  {fakeBookDetail.sellerImage ? (
                    <div
                      className="book-detail__seller-img"
                      style={{
                        backgroundImage: `url(${fakeBookDetail.sellerImage})`,
                      }}
                    />
                  ) : (
                    <Avvvatars
                      style="shape"
                      size={24}
                      value={fakeBookDetail.sellerName}
                    />
                  )}
                  <div className="book-detail__seller-name">
                    {fakeBookDetail.sellerName}
                  </div>
                </span>
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Đánh giá:{" "}
              <Rate
                allowHalf
                disabled
                style={{ color: "#333" }}
                defaultValue={fakeBookDetail.rating}
              />
              {fakeBookDetail.rating}
            </div>
          </div>

          <div className="book-detail__price">
            Giá:{" "}
            <div className="book-detail__price-text">
              {fakeBookDetail.price}đ
            </div>
          </div>

          <div>Số lượng: </div>

          <div className="book-detail__button-container">
            <Button
              buttonText="Thêm vào giỏ hàng"
              buttonIcon={Cart}
              buttonType={true}
            />
            <Button buttonText="Mua ngay" buttonIcon={Arrow} />
          </div>
        </div>
      </div>

      <div className="book-detail--bottom">
        <div className="book-detail__description">
          <p className="book-detail__description-header">Giới thiệu sách</p>
          <p>{fakeBookDetail.description}</p>
        </div>

        <div className="book-detail__reviews">
          <p className="book-detail__reviews-header">Đánh giá</p>
        </div>
      </div>

      RECOMMEND
    </>
  );
};

export default BookDetail;
