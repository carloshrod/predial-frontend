import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AutoScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
}