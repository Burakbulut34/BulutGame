// src/pages/BlogDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((b) => b.slug === slug);
    setBlog(foundBlog);
    setRecentBlogs(storedBlogs.filter((b) => b.slug !== slug)); // Aktif olmayanlar
  }, [slug]);

  if (!blog) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Blog bulunamadı.</p>
            <Link to="/blogs">Ana sayfaya dön</Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            {/* Sol Kısım: Blog Detay */}
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt={blog.title} className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span><i className="ri-user-line"></i> {blog.author}</span>
                  <span><i className="ri-calendar-line"></i> {blog.date}</span>
                  <span><i className="ri-time-line"></i> {blog.time}</span>
                </div>

                <p className="section__description">{blog.description}</p>
              </div>

              {/* Yorumlar */}
              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Yorum</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className="fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">Blog çok bilgilendirici. Teşekkürler!</p>
                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Yanıtla
                    </span>
                  </div>
                </div>

                {/* Yorum Formu */}
                <div className="leave__comment-form mt-5">
                  <h4>Yorum Bırakın</h4>
                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Ad - Soyad" />
                      <Input type="email" placeholder="E-posta" />
                    </FormGroup>
                    <FormGroup>
                      <textarea rows="5" className="w-100 py-2 px-3" placeholder="Yorum..."></textarea>
                    </FormGroup>
                    <button className="btn comment__btn mt-3">Yorum Gönder</button>
                  </Form>
                </div>
              </div>
            </Col>
            {/* Sağ Kısım: Son Gönderiler */}
            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold">Son Oluşturulan Notlar</h5>
              </div>

              {recentBlogs.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt={item.title} className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.slug}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
