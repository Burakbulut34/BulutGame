import React, { useState, useEffect } from "react";
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Button, Form, FormGroup, Label, Input,
  Container, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import "../../styles/blog-item.css";
import img1 from "../../assets/all-images/note-img/img1.png";
import img2 from "../../assets/all-images/note-img/img2.png";
import img3 from "../../assets/all-images/note-img/img3.png";

const slugify = (text) =>
text.toString().toLowerCase().trim().replace(/\s+/g, "-")
.replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState(
    process.env.PUBLIC_URL + "../../assets/all-images/note-img/img1.jpg"
  );
  const [author, setAuthor] = useState("");

  const [description, setDescription] = useState("");


  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const toggleModal = () => setModal(!modal);

  const handleSubmit = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const newBlog = {
      id: Date.now(),
      title,
      description,
      imgUrl,
      slug: slugify(title),
      author,
      date,
      time,
    };

    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // Temizleme
    setTitle("");
    setDescription("");
    setImgUrl("img1.jpg");
    toggleModal();
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <Container>
      <Row className="mb-5">
        <Col lg="6">
          <h2 className="section__title">Notlar</h2>
        </Col>
        <Col lg="6" className="text-end">
          <Button style={{background:"black"}} onClick={toggleModal}>
            Not Oluştur
          </Button>
        </Col>
      </Row>

      <Row>
        {blogs.length > 0 ? (
          blogs.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="12" className="mb-4">
              <BlogItem item={item} onDelete={handleDelete} />
            </Col>
          ))
        ) : (
          <Col lg="12" className="text-center">
            <p>Henüz Not yok. Lütfen bir not oluşturun.</p>
          </Col>
        )}
      </Row>
    

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Yeni Blog Oluştur</ModalHeader>
<ModalBody>
  <Form>
    <FormGroup>
      <Label for="title">Başlık</Label>
      <Input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Not başlığı girin"
      />
    </FormGroup>
    <FormGroup>
      <Label for="description">Açıklama</Label>
      <Input
        type="textarea"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Kısa açıklama"
      />
    </FormGroup>
    {/* Burada yazar inputu ekleniyor */}
    <FormGroup>
      <Label for="author">Yazar</Label>
      <Input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Yazar adınızı girin"
      />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="imgUrl">Resim Seç</Label>
      <Input
        type="select"
        id="imgUrl"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      >
        <option value={img1}>Resim 1</option>
        <option value={img2}>Resim 2</option>
        <option value={img3}>Resim 3</option>
      </Input>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <img
          src={imgUrl}
          alt="Seçilen Resim"
          style={{ width: "120px", height: "auto", borderRadius: "8px", border: "1px solid #ccc" }}
        />
      </div>
    </FormGroup>
  </Form>
</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={handleSubmit}>Kaydet</Button>
  <Button color="secondary" onClick={toggleModal}>İptal</Button>
</ModalFooter>

      </Modal>
    </Container>
  );
};


const BlogItem = ({ item, onDelete }) => {
  const { id, imgUrl, title, author, date, description, time, slug } = item;

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const toggleEditModal = () => setEditModal(!editModal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleUpdate = () => {
    const updatedItem = {
      ...item,
      title: editedTitle,
      description: editedDescription,
    };

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = storedBlogs.map((blog) =>
      blog.id === id ? updatedItem : blog
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    window.location.reload(); // veya bir üst komponentte setBlogs çağrılabilir
  };

  const handleDelete = () => {
    onDelete(id);
    toggleDeleteModal();
  };

  return (
    <div className="blog__item h-100 d-flex flex-column">
      <img src={imgUrl} alt={title} className="w-100" />
      <div className="blog__info p-3 d-flex flex-column flex-grow-1">
        <Link to={`/blogs/${slug}`} className="blog__title">{title}</Link>
        <p className="section__description mt-3">
          {description.length > 100 ? description.substring(0, 100) + "..." : description}
        </p>
        <Link to={`/blogs/${slug}`} className="read__more mt-auto">İncele</Link>
        <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
          <span className="blog__author"><i className="ri-user-line"></i> {author}</span>
          <div className="d-flex align-items-center gap-3">
            <span><i className="ri-calendar-line"></i> {date}</span>
            <span><i className="ri-time-line"></i> {time}</span>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
        <Button color="danger" size="sm" onClick={toggleDeleteModal}>
            Sil
          </Button>
          <Button color="warning" size="sm" onClick={toggleEditModal}>
            Düzenle
          </Button>
        </div>
      </div>

      {/* Düzenleme Modalı */}
      <Modal isOpen={editModal} toggle={toggleEditModal}>
        <ModalHeader toggle={toggleEditModal}>Notu Düzenle</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="editTitle">Başlık</Label>
              <Input
                id="editTitle"
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="editDesc">Açıklama</Label>
              <Input
                id="editDesc"
                type="textarea"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Kaydet</Button>
          <Button color="secondary" onClick={toggleEditModal}>İptal</Button>
        </ModalFooter>
      </Modal>

      
      {/* Silme Onayı Modalı */}
      <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
        <ModalHeader toggle={toggleDeleteModal}>Notu Sil</ModalHeader>
        <ModalBody>
          <p>
            <strong>{title}</strong> adlı notu silmek istiyor musunuz?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>Evet</Button>
          <Button color="secondary" onClick={toggleDeleteModal}>Hayır</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BlogList;
