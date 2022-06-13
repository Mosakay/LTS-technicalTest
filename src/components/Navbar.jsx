import React, {useState, useEffect} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { images } from "../constants";

const Navbar = ({data, wordEntered, handleFilter, clearInput}) => {

  const [toggle, setToggle] = useState(false);

  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = data.data?.filter((value) => {
  //     return value.name.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

 

  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.logo} alt="logo" />
    </div>
    <ul className="app__navbar-links">
      {["Home", "About", "Contact"].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>

    <div className="app__navbar-search">
    <input
          className="search-bar"
          type="text"
          value={wordEntered}
          onChange={handleFilter}
          placeholder="Search"
        />
        <img onClick={clearInput} src={images.searchIcon} alt="search" />
    </div>

    <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
  </nav>
  )
}

export default Navbar