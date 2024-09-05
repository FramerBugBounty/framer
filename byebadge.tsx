import { useEffect } from 'react'

export function useStyleManager(showScrollbar: boolean) {
  useEffect(() => {
    const style = document.createElement("style")
    let scrollbarStyles = showScrollbar
      ? ""
      : `
    ::-webkit-scrollbar { width: 0px; height: 0px;}
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
`
    style.innerHTML = `
    #__framer-badge-container { display: none !important; }
    ${scrollbarStyles}
    overscroll-behavior: contain;
`
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [showScrollbar])
}
