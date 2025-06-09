import { useState } from "react";
import Layout from "../components/Layout";
import image from '../assets/random_person.jpeg';
import { RiEditLine } from "@remixicon/react";

export default function UserProfile() {
  const [editOpen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Lorem Ipsum",
    email: "lorem.ipsum@lorem.ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    photo: image
  });

  const [form, setForm] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, photo: imageUrl }));
    }
  };

  const handleSubmit = () => {
    setProfile(form);
    setEditOpen(false);
  };

  return (
    <Layout>
      <div className="search-page-header">
        <h1 className="search-title">Profile</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <img
            src={profile.photo}
            alt="Profile"
            style={{ width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #67e8f9" }}
          />
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{profile.name}</h1>
          <button
            onClick={() => setEditOpen(true)}
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              border: "2px solid #00B5D8",
              backgroundColor: "#E6F7FB",
              color: "#333",
              cursor: "pointer",
            }}
          >
            <RiEditLine size={16} className="edit-icon" /> Edit Profile
          </button>
        </div>

        {editOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "0.5rem", width: "90%", maxWidth: "400px" }}>
              <h2 className = "profile-text">Editar Perfil</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label className = "profile-text">Name</label>
                  <input className = "profile-text" name="name" value={form.name} onChange={handleInputChange} style={{ width: "100%"}} />
                </div>
                <div>
                  <label className = "profile-text">E-mail</label>
                  <input className = "profile-text" name="email" value={form.email} onChange={handleInputChange} style={{ width: "100%" }} />
                </div>
                <div>
                  <label className = "profile-text">Bio</label>
                  <input className = "profile-text" name="bio" value={form.bio} onChange={handleInputChange} style={{ width: "100%" }} />
                </div>
                <div>
                  <label className = "profile-text">Photo</label>
                  <input className = "profile-text" type="file" accept="image/*" onChange={handleFileChange} style={{ width: "100%" }}/>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                  <button onClick={() => setEditOpen(false)} style={{ padding: "0.5rem 1rem", backgroundColor: "#e5e7eb", border: "none", borderRadius: "0.25rem" }}>Cancelar</button>
                  <button onClick={handleSubmit} style={{ padding: "0.5rem 1rem", backgroundColor: "#06b6d4", color: "white", border: "none", borderRadius: "0.25rem" }}>Salvar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "0px 20px", textAlign: "left" }}>
        <p className = "profile-text">Bio</p>
        <p className = "profile-text profile-text-blue">{profile.bio}</p>
        <p className = "profile-text">E-mail</p>
        <p className = "profile-text profile-text-blue">{profile.email}</p>
      </div>
    </Layout>
  );
}
