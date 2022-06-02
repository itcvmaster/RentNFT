import { useEffect } from 'react';
import styled from 'styled-components';
const ScrollToTop: React.FC = () => {

  useEffect(() => {
    const header = document.getElementById("sticky-header");
    const toTop = document.getElementById("scroll-to-top");
    if (header && toTop) {
      const scrollListener = () => {
        if (window.scrollY > header.offsetTop) toTop.classList.add("show");
        else toTop.classList.remove("show");
      };
      window.addEventListener("scroll", scrollListener);
      return () => {
        window.removeEventListener("scroll", scrollListener);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <ButtonToTop id="scroll-to-top" onClick={() => scrollToTop()}>^</ButtonToTop>
  )
}

const ButtonToTop = styled("div")`
  display: none;
  cursor: pointer;
  position: fixed;
  right: 15px;
  bottom: 15px;
  color: transparent;
  background: transparent;
  z-index: 999;

  font-size: 16px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  
  &:hover{
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  &.show{
    color: var(--shade-8);
    background: var(--shade-5);
    transition: all 0.3s ease;
    display: block;
  }
`;


export default ScrollToTop;