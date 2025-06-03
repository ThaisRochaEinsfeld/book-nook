import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  status: "Concluído" | "Não lido" | "Em progresso";
}

interface ShelfContextProps {
  shelf: Book[];
  addToShelf: (book: Book) => void;
  updateBookStatus: (id: string, newStatus: Book["status"]) => void;
  removeFromShelf: (id: string) => void; 
}


const ShelfContext = createContext<ShelfContextProps | undefined>(undefined);

export const ShelfProvider = ({ children }: { children: ReactNode }) => {
  const [shelf, setShelf] = useState<Book[]>(() => {
    const storedShelf = localStorage.getItem("shelf");
    return storedShelf ? JSON.parse(storedShelf) : [];
  });

  const addToShelf = (book: Book) => {
    setShelf((prev) => {
      const updatedShelf = [...prev, book];
      localStorage.setItem("shelf", JSON.stringify(updatedShelf));
      return updatedShelf;
    });
  };

  const updateBookStatus = (id: string, newStatus: Book["status"]) => {
    setShelf((prev) => {
      const updatedShelf = prev.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      );
      localStorage.setItem("shelf", JSON.stringify(updatedShelf));
      return updatedShelf;
    });
  };

  const removeFromShelf = (id: string) => {
    setShelf((prev) => {
      const updatedShelf = prev.filter((book) => book.id !== id);
      localStorage.setItem("shelf", JSON.stringify(updatedShelf));
      return updatedShelf;
    });
  };  

  useEffect(() => {
    const storedShelf = localStorage.getItem("shelf");
    if (storedShelf) {
      setShelf(JSON.parse(storedShelf));
    }
  }, []);

  return (
    <ShelfContext.Provider value={{ shelf, addToShelf, updateBookStatus, removeFromShelf }}>
    {children}
  </ShelfContext.Provider>
  
  );
};

export const useShelf = () => {
  const context = useContext(ShelfContext);
  if (!context) {
    throw new Error("useShelf deve ser usado dentro de ShelfProvider");
  }
  return context;
};
