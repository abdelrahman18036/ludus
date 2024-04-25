import React from "react";
import logo from "../../../assets/images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SectionMenuLeft({ onTabClick, activeTab }) {
<<<<<<< Updated upstream
   const navigate = useNavigate();
   const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('id');
    try {
=======
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('id');
>>>>>>> Stashed changes
        navigate('/');
        navigate(0);
    } catch (error) {
        console.error('Navigation error:', error);
        navigate('/');

    }
};

    return (

        <div className="section-menu-left">
            <div className="box-logo">
                <a href="index-2.html" style={{ color: "white", fontSize: "30px", fontWeight: "bolder" }}><img src={logo} alt="logo" style={{ height: "60px" }} /> MARKET</a>
            </div>
            <div className="create menu-tab">
                <a className="tf-button style-1 type-1 tablinks" data-tabs="create">
                    <span>Create</span>
                    <i className="icon-create" />
                </a>
            </div>
            <div className="over-content">
                <div className="content">
                    <h6>Marketplace</h6>
                    <ul className="menu-tab">
                        <li className={`tablinks ${activeTab === 'market' ? 'active' : ''}`} data-tabs="market" onClick={() => onTabClick('market')}>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path d="M6.75731 9.35159V15.64" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.0351 6.34253V15.64" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.2431 12.6746V15.6401" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2954 1.83334H6.70492C3.71048 1.83334 1.8335 3.95275 1.8335 6.95307V15.0469C1.8335 18.0473 3.70175 20.1667 6.70492 20.1667H15.2954C18.2986 20.1667 20.1668 18.0473 20.1668 15.0469V6.95307C20.1668 3.95275 18.2986 1.83334 15.2954 1.83334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.71982 1.83371H15.2806C18.3982 1.83371 20.1582 3.60196 20.1673 6.71954V15.2812C20.1673 18.3979 18.3982 20.167 15.2806 20.167H6.71982C3.60223 20.167 1.83398 18.3979 1.83398 15.2812V6.71954C1.83398 3.60196 3.60223 1.83371 6.71982 1.83371ZM11.0456 16.372C11.4407 16.372 11.7697 16.0787 11.8064 15.6845V6.34371C11.8431 6.05954 11.7065 5.77446 11.459 5.61954C11.2014 5.46371 10.8897 5.46371 10.6432 5.61954C10.3947 5.77446 10.2582 6.05954 10.2847 6.34371V15.6845C10.3315 16.0787 10.6606 16.372 11.0456 16.372ZM15.2628 16.372C15.6478 16.372 15.9769 16.0787 16.0237 15.6845V12.6779C16.0502 12.3836 15.9137 12.1095 15.6652 11.9537C15.4187 11.7979 15.107 11.7979 14.8503 11.9537C14.6019 12.1095 14.4653 12.3836 14.502 12.6779V15.6845C14.5387 16.0787 14.8677 16.372 15.2628 16.372ZM7.534 15.6845C7.49734 16.0787 7.16825 16.372 6.77317 16.372C6.379 16.372 6.049 16.0787 6.01325 15.6845V9.35038C5.98575 9.0653 6.12234 8.78205 6.37075 8.62621C6.61734 8.47038 6.92992 8.47038 7.17742 8.62621C7.424 8.78205 7.56242 9.0653 7.534 9.35038V15.6845Z" fill="#865DFF" />
                            </svg>
                            Market
                        </li>
                        <li className={`tablinks ${activeTab === 'bid' ? 'active' : ''}`} data-tabs="bid" onClick={() => onTabClick('bid')}>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.61499 14.6693C6.46832 14.6693 6.32074 14.6226 6.19607 14.5272C5.89541 14.2953 5.83857 13.8636 6.07049 13.5629L8.81407 9.99708C8.92591 9.85133 9.09182 9.75691 9.27332 9.73399C9.45849 9.71016 9.63999 9.76149 9.78391 9.87608L12.3689 11.9065L14.6303 8.98874C14.8632 8.68716 15.294 8.63124 15.5947 8.86591C15.8953 9.09874 15.9503 9.53049 15.7175 9.83024L13.0317 13.2952C12.9198 13.4401 12.7548 13.5345 12.5733 13.5565C12.39 13.5812 12.2085 13.5281 12.0637 13.4153L9.48049 11.3858L7.16041 14.4007C7.02474 14.5767 6.82124 14.6693 6.61499 14.6693Z" fill="white" />
                                    <mask id="mask0_1075_3648" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={15} y={1} width={6} height={6}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.8555 1.83344H20.7541V6.73293H15.8555V1.83344Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1075_3648)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3048 3.20834C17.7126 3.20834 17.2305 3.68959 17.2305 4.28268C17.2305 4.87484 17.7126 5.35793 18.3048 5.35793C18.897 5.35793 19.3791 4.87484 19.3791 4.28268C19.3791 3.68959 18.897 3.20834 18.3048 3.20834ZM18.3048 6.73293C16.9546 6.73293 15.8555 5.63384 15.8555 4.28268C15.8555 2.93151 16.9546 1.83334 18.3048 1.83334C19.656 1.83334 20.7541 2.93151 20.7541 4.28268C20.7541 5.63384 19.656 6.73293 18.3048 6.73293Z" fill="white" />
                                    </g>
                                    <mask id="mask1_1075_3648" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={1} y={2} width={20} height={19}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.83398 2.60526H20.0407V20.8112H1.83398V2.60526Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_1075_3648)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8809 20.8112H6.9939C3.90748 20.8112 1.83398 18.6433 1.83398 15.4166V8.00809C1.83398 4.77684 3.90748 2.60526 6.9939 2.60526H13.6562C14.0357 2.60526 14.3437 2.91326 14.3437 3.29276C14.3437 3.67226 14.0357 3.98026 13.6562 3.98026H6.9939C4.6949 3.98026 3.20898 5.56059 3.20898 8.00809V15.4166C3.20898 17.8962 4.65915 19.4362 6.9939 19.4362H14.8809C17.1799 19.4362 18.6658 17.8586 18.6658 15.4166V8.96417C18.6658 8.58467 18.9738 8.27667 19.3533 8.27667C19.7328 8.27667 20.0408 8.58467 20.0408 8.96417V15.4166C20.0408 18.6433 17.9673 20.8112 14.8809 20.8112Z" fill="white" />
                                    </g>
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.7481 4.0425C15.7481 2.82333 16.7381 1.83333 17.9573 1.83333C19.1764 1.83333 20.1664 2.82333 20.1664 4.0425C20.1664 5.26166 19.1764 6.25166 17.9573 6.25166C16.7381 6.25166 15.7481 5.26166 15.7481 4.0425ZM12.2188 13.5294L14.868 10.1111L14.8313 10.1294C14.978 9.92777 15.0055 9.6711 14.9047 9.44194C14.8048 9.21277 14.5838 9.05694 14.3464 9.0386C14.098 9.0111 13.8514 9.1211 13.7038 9.32277L11.4864 12.1919L8.94634 10.1936C8.79051 10.0744 8.60717 10.0277 8.42384 10.0469C8.24142 10.0744 8.07642 10.1744 7.96551 10.321L5.25309 13.8511L5.19717 13.9336C5.04134 14.226 5.11467 14.6019 5.38967 14.8044C5.51801 14.8869 5.65551 14.9419 5.81134 14.9419C6.02309 14.9511 6.22384 14.8402 6.35217 14.6669L8.65301 11.7052L11.2655 13.6678L11.348 13.7219C11.6413 13.8777 12.008 13.8053 12.2188 13.5294ZM14.1622 3.46527C14.1255 3.69444 14.1072 3.9236 14.1072 4.15277C14.1072 6.21527 15.7755 7.88269 17.8288 7.88269C18.058 7.88269 18.278 7.8561 18.5072 7.81944V15.216C18.5072 18.3244 16.6738 20.1669 13.5572 20.1669H6.78392C3.66634 20.1669 1.83301 18.3244 1.83301 15.216V8.4336C1.83301 5.31694 3.66634 3.46527 6.78392 3.46527H14.1622Z" fill="#865DFF" />
                            </svg>
                            Active Bid
                        </li>
                        <li className={`tablinks ${activeTab === 'explore' ? 'active' : ''}`} data-tabs="explore" onClick={() => onTabClick('explore')}>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73177 3.20834C3.21094 3.20834 3.21094 3.39901 3.21094 5.72918V5.75209C3.21094 6.76684 3.21094 7.50018 3.45935 7.81001C3.70227 8.11068 4.42369 8.25001 5.73177 8.25001C7.03985 8.25001 7.76127 8.10976 8.00419 7.80909C8.2526 7.50018 8.2526 6.76684 8.2526 5.75118C8.2526 3.39901 8.2526 3.20834 5.73177 3.20834ZM5.73177 9.62501C4.18627 9.62501 3.02669 9.46276 2.3896 8.67168C1.83594 7.98509 1.83594 7.04826 1.83594 5.75209L2.52344 5.72918H1.83594C1.83594 3.09834 2.00185 1.83334 5.73177 1.83334C9.46169 1.83334 9.6276 3.09834 9.6276 5.72918C9.6276 7.04734 9.6276 7.98509 9.07394 8.67168C8.43685 9.46276 7.27727 9.62501 5.73177 9.62501Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8177 3.20834C13.2969 3.20834 13.2969 3.39901 13.2969 5.72918V5.75209C13.2969 6.76684 13.2969 7.50018 13.5453 7.81001C13.7882 8.11068 14.5096 8.25001 15.8177 8.25001C17.1258 8.25001 17.8472 8.10976 18.0901 7.80909C18.3385 7.50018 18.3385 6.76684 18.3385 5.75118C18.3385 3.39901 18.3385 3.20834 15.8177 3.20834ZM15.8177 9.62501C14.2722 9.62501 13.1126 9.46276 12.4755 8.67168C11.9219 7.98509 11.9219 7.04826 11.9219 5.75209L12.6094 5.72918H11.9219C11.9219 3.09834 12.0878 1.83334 15.8177 1.83334C19.5476 1.83334 19.7135 3.09834 19.7135 5.72918C19.7135 7.04734 19.7135 7.98509 19.1599 8.67168C18.5228 9.46276 17.3632 9.62501 15.8177 9.62501Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73177 13.2917C3.21094 13.2917 3.21094 13.4824 3.21094 15.8125V15.8354C3.21094 16.8502 3.21094 17.5835 3.45935 17.8934C3.70227 18.194 4.42369 18.3334 5.73177 18.3334C7.03985 18.3334 7.76127 18.1931 8.00419 17.8924C8.2526 17.5835 8.2526 16.8502 8.2526 15.8345C8.2526 13.4824 8.2526 13.2917 5.73177 13.2917ZM5.73177 19.7084C4.18627 19.7084 3.02669 19.5461 2.3896 18.755C1.83594 18.0684 1.83594 17.1316 1.83594 15.8354L2.52344 15.8125H1.83594C1.83594 13.1817 2.00185 11.9167 5.73177 11.9167C9.46169 11.9167 9.6276 13.1817 9.6276 15.8125C9.6276 17.1307 9.6276 18.0684 9.07394 18.755C8.43685 19.5461 7.27727 19.7084 5.73177 19.7084Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8177 13.2917C13.2969 13.2917 13.2969 13.4824 13.2969 15.8125V15.8354C13.2969 16.8502 13.2969 17.5835 13.5453 17.8934C13.7882 18.194 14.5096 18.3334 15.8177 18.3334C17.1258 18.3334 17.8472 18.1931 18.0901 17.8924C18.3385 17.5835 18.3385 16.8502 18.3385 15.8345C18.3385 13.4824 18.3385 13.2917 15.8177 13.2917ZM15.8177 19.7084C14.2722 19.7084 13.1126 19.5461 12.4755 18.755C11.9219 18.0684 11.9219 17.1316 11.9219 15.8354L12.6094 15.8125H11.9219C11.9219 13.1817 12.0878 11.9167 15.8177 11.9167C19.5476 11.9167 19.7135 13.1817 19.7135 15.8125C19.7135 17.1307 19.7135 18.0684 19.1599 18.755C18.5228 19.5461 17.3632 19.7084 15.8177 19.7084Z" fill="white" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.16134 1.83334H7.25967C8.55217 1.83334 9.58801 2.88751 9.58801 4.18093V7.30584C9.58801 8.60751 8.55217 9.65251 7.25967 9.65251H4.16134C2.87801 9.65251 1.83301 8.60751 1.83301 7.30584V4.18093C1.83301 2.88751 2.87801 1.83334 4.16134 1.83334ZM4.16134 12.3472H7.25967C8.55217 12.3472 9.58801 13.3932 9.58801 14.6948V17.8197C9.58801 19.1122 8.55217 20.1664 7.25967 20.1664H4.16134C2.87801 20.1664 1.83301 19.1122 1.83301 17.8197V14.6948C1.83301 13.3932 2.87801 12.3472 4.16134 12.3472ZM17.8381 1.83334H14.7398C13.4473 1.83334 12.4114 2.88751 12.4114 4.18093V7.30584C12.4114 8.60751 13.4473 9.65251 14.7398 9.65251H17.8381C19.1214 9.65251 20.1664 8.60751 20.1664 7.30584V4.18093C20.1664 2.88751 19.1214 1.83334 17.8381 1.83334ZM14.7398 12.3472H17.8381C19.1214 12.3472 20.1664 13.3932 20.1664 14.6948V17.8197C20.1664 19.1122 19.1214 20.1664 17.8381 20.1664H14.7398C13.4473 20.1664 12.4114 19.1122 12.4114 17.8197V14.6948C12.4114 13.3932 13.4473 12.3472 14.7398 12.3472Z" fill="#865DFF" />
                            </svg>
                            Explore
                        </li>
                    </ul>
                </div>
                <div className="content mt-30">
                    <h6>Account</h6>
                    <ul className="menu-tab">
                        <li className="tablinks" data-tabs="tf-collection">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <mask id="mask0_1075_14628" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={1} y={1} width={20} height={20}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.83398 1.83334H20.8059V20.7798H1.83398V1.83334Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1075_14628)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.00673 3.20834C4.34473 3.20834 3.20898 4.56134 3.20898 7.73026V14.8793C3.20898 17.798 4.82048 19.4049 7.74648 19.4049H14.88C17.7987 19.4049 19.4056 17.798 19.4056 14.8793V14.8766L19.4312 10.3253C19.4312 7.20959 18.3624 5.99501 15.617 5.99501H13.0228C12.1529 5.99409 11.3224 5.57884 10.7999 4.88401L9.96299 3.77118C9.6999 3.41826 9.27915 3.20926 8.83915 3.20834H7.00673ZM14.88 20.7799H7.74648C4.09998 20.7799 1.83398 18.5185 1.83398 14.8793V7.73026C1.83398 3.81701 3.57473 1.83334 7.00673 1.83334H8.84007C9.71182 1.83426 10.5423 2.25043 11.063 2.94618L11.8981 4.05718C12.163 4.40918 12.5837 4.61909 13.0237 4.62001H15.617C19.1572 4.62001 20.8062 6.43409 20.8062 10.329L20.7806 14.8821C20.7797 18.5194 18.5192 20.7799 14.88 20.7799Z" fill="white" />
                                    </g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3235 14.4034H7.31641C6.93691 14.4034 6.62891 14.0954 6.62891 13.7159C6.62891 13.3364 6.93691 13.0284 7.31641 13.0284H15.3235C15.703 13.0284 16.011 13.3364 16.011 13.7159C16.011 14.0954 15.703 14.4034 15.3235 14.4034Z" fill="white" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.3279 4.47353H15.142C18.5245 4.47353 20.1745 6.27936 20.1654 9.9827V14.4469C20.1654 17.9852 17.9837 20.1669 14.4362 20.1669H7.55203C4.02286 20.1669 1.83203 17.9852 1.83203 14.4377V7.55353C1.83203 3.75853 3.5187 1.83353 6.8462 1.83353H8.29453C9.14795 1.82436 9.94453 2.21853 10.467 2.8877L11.2737 3.9602C11.5304 4.28103 11.9154 4.47353 12.3279 4.47353ZM6.75391 14.016H15.2422C15.6181 14.016 15.9206 13.7044 15.9206 13.3285C15.9206 12.9435 15.6181 12.641 15.2422 12.641H6.75391C6.36891 12.641 6.06641 12.9435 6.06641 13.3285C6.06641 13.7044 6.36891 14.016 6.75391 14.016Z" fill="#865DFF" />
                            </svg>
                            My collection
                        </li>
                        <li className="tablinks" data-tabs="favorite">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.63385 10.6318C1.65026 7.56096 2.79976 4.05104 6.02368 3.01246C7.71951 2.46521 9.59135 2.78788 11.0012 3.84846C12.3349 2.81721 14.2755 2.46888 15.9695 3.01246C19.1934 4.05104 20.3503 7.56096 19.3676 10.6318C17.8368 15.4993 11.0012 19.2485 11.0012 19.2485C11.0012 19.2485 4.21601 15.5561 2.63385 10.6318Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.668 6.14166C15.6488 6.45883 16.3418 7.33425 16.4252 8.36183" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5279 2.29232C15.1063 2.29232 15.6838 2.3739 16.2329 2.55815C19.6163 3.65815 20.8355 7.37066 19.817 10.6157C19.2395 12.2739 18.2954 13.7873 17.0588 15.0239C15.2887 16.7381 13.3463 18.2597 11.2554 19.5706L11.0262 19.709L10.7879 19.5614C8.68963 18.2597 6.73621 16.7381 4.94963 15.0147C3.7213 13.7782 2.77621 12.2739 2.18955 10.6157C1.15371 7.37066 2.37288 3.65815 5.79296 2.5389C6.0588 2.44724 6.33288 2.38307 6.60788 2.34732H6.71788C6.97546 2.30974 7.23121 2.29232 7.48788 2.29232H7.58871C8.16621 2.30974 8.72538 2.41057 9.26713 2.59482H9.32121C9.35788 2.61224 9.38538 2.63149 9.40371 2.6489C9.6063 2.71399 9.79788 2.78732 9.98121 2.88815L10.3295 3.04399C10.4137 3.08888 10.5082 3.15747 10.5898 3.21675C10.6416 3.25431 10.6882 3.28813 10.7237 3.30982C10.7387 3.31865 10.7539 3.32752 10.7692 3.33647C10.8478 3.38235 10.9297 3.43014 10.9987 3.48307C12.0171 2.70482 13.2537 2.28315 14.5279 2.29232ZM16.9674 8.8923C17.3432 8.88222 17.6641 8.58063 17.6916 8.19472V8.08563C17.7191 6.80138 16.9408 5.63813 15.7574 5.18897C15.3816 5.05972 14.9691 5.2623 14.8316 5.6473C14.7032 6.0323 14.9049 6.45397 15.2899 6.59055C15.8775 6.81055 16.2707 7.38897 16.2707 8.02972V8.05813C16.2533 8.26805 16.3166 8.47063 16.4449 8.62647C16.5732 8.7823 16.7657 8.87305 16.9674 8.8923Z" fill="#865DFF" />
                            </svg>
                            My favorite
                        </li>
                        <li className="tablinks" data-tabs="history">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.0269 3.20831C4.70773 3.20831 3.20898 4.7969 3.20898 7.25631V14.7436C3.20898 17.2031 4.70773 18.7916 7.0269 18.7916H14.9726C17.2927 18.7916 18.7923 17.2031 18.7923 14.7436V7.25631C18.7923 4.7969 17.2936 3.20831 14.9735 3.20831H7.0269ZM14.9726 20.1666H7.0269C3.92032 20.1666 1.83398 17.9868 1.83398 14.7436V7.25631C1.83398 4.01315 3.92032 1.83331 7.0269 1.83331H14.9735C18.0801 1.83331 20.1673 4.01315 20.1673 7.25631V14.7436C20.1673 17.9868 18.0801 20.1666 14.9726 20.1666Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.1084 13.5369C13.9883 13.5369 13.8673 13.5058 13.7564 13.4407L10.648 11.5863C10.4408 11.4616 10.3125 11.237 10.3125 10.9959V6.99744C10.3125 6.61794 10.6205 6.30994 11 6.30994C11.3795 6.30994 11.6875 6.61794 11.6875 6.99744V10.6054L14.4613 12.2582C14.7867 12.4534 14.894 12.8751 14.6997 13.2014C14.5704 13.4169 14.3422 13.5369 14.1084 13.5369Z" fill="white" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.03051 1.83337H14.978C18.0855 1.83337 20.1663 4.01412 20.1663 7.25912V14.7483C20.1663 17.985 18.0855 20.1667 14.978 20.1667H7.03051C3.92301 20.1667 1.83301 17.985 1.83301 14.7483V7.25912C1.83301 4.01412 3.92301 1.83337 7.03051 1.83337ZM14.2813 14.4925C14.5105 14.4925 14.7397 14.3734 14.868 14.1534C15.0697 13.8316 14.9597 13.41 14.6297 13.2092L11.3663 11.2659V7.02996C11.3663 6.65504 11.0638 6.34246 10.6788 6.34246C10.303 6.34246 9.99134 6.65504 9.99134 7.02996V11.66C9.99134 11.8984 10.1197 12.1275 10.3305 12.2467L13.9238 14.3917C14.0338 14.465 14.1622 14.4925 14.2813 14.4925Z" fill="#865DFF" />
                            </svg>
                            History
                        </li>
                        <li className="tablinks" data-tabs="settings">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0713 6.98827L18.5008 5.99819C18.0181 5.16043 16.9484 4.87142 16.1095 5.35212V5.35212C15.7101 5.58736 15.2336 5.6541 14.785 5.53762C14.3364 5.42115 13.9526 5.13102 13.7182 4.73122C13.5673 4.4771 13.4863 4.18765 13.4832 3.89216V3.89216C13.4968 3.41841 13.3181 2.95933 12.9877 2.61949C12.6574 2.27965 12.2035 2.088 11.7296 2.0882H10.5801C10.1158 2.08819 9.67059 2.27321 9.34306 2.60233C9.01552 2.93144 8.83263 3.3775 8.83486 3.84182V3.84182C8.8211 4.80047 8.03999 5.57037 7.08124 5.57027C6.78575 5.5672 6.49631 5.48616 6.24219 5.33534V5.33534C5.40328 4.85464 4.33358 5.14365 3.85088 5.98141L3.23837 6.98827C2.75626 7.82499 3.04134 8.89401 3.87605 9.37958V9.37958C4.41863 9.69283 4.75288 10.2718 4.75288 10.8983C4.75288 11.5248 4.41863 12.1037 3.87605 12.417V12.417C3.0424 12.8992 2.75701 13.9657 3.23837 14.7999V14.7999L3.81732 15.7983C4.04348 16.2064 4.42294 16.5076 4.87173 16.6351C5.32052 16.7627 5.80164 16.7061 6.20862 16.478V16.478C6.60871 16.2445 7.08548 16.1806 7.53295 16.3003C7.98042 16.4201 8.36152 16.7136 8.59154 17.1157C8.74236 17.3698 8.8234 17.6592 8.82647 17.9547V17.9547C8.82647 18.9232 9.6116 19.7083 10.5801 19.7083H11.7296C12.6948 19.7083 13.4786 18.9283 13.4832 17.9631V17.9631C13.481 17.4973 13.665 17.05 13.9944 16.7206C14.3237 16.3913 14.7711 16.2072 15.2368 16.2095C15.5316 16.2174 15.8199 16.2981 16.0759 16.4444V16.4444C16.9126 16.9265 17.9816 16.6414 18.4672 15.8067V15.8067L19.0713 14.7999C19.3052 14.3985 19.3693 13.9205 19.2497 13.4716C19.13 13.0228 18.8363 12.6402 18.4336 12.4086V12.4086C18.031 12.1769 17.7373 11.7943 17.6176 11.3455C17.4979 10.8967 17.5621 10.4186 17.796 10.0173C17.948 9.75177 18.1682 9.53164 18.4336 9.37958V9.37958C19.2634 8.89428 19.5478 7.83149 19.0713 6.99666V6.99666V6.98827Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <ellipse cx="11.1587" cy="10.8983" rx="2.41648" ry="2.41648" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.702 12.4484C19.0299 12.6225 19.2828 12.8975 19.4608 13.1725C19.8074 13.7409 19.7793 14.4375 19.4421 15.0517L18.7863 16.1517C18.4397 16.7384 17.7933 17.105 17.1282 17.105C16.8003 17.105 16.4349 17.0134 16.1352 16.83C15.8916 16.6742 15.6106 16.6192 15.3108 16.6192C14.3834 16.6192 13.6058 17.38 13.5777 18.2875C13.5777 19.3417 12.7159 20.1667 11.6386 20.1667H10.3645C9.27784 20.1667 8.41599 19.3417 8.41599 18.2875C8.39725 17.38 7.61971 16.6192 6.69228 16.6192C6.38314 16.6192 6.1021 16.6742 5.86791 16.83C5.56813 17.0134 5.19341 17.105 4.8749 17.105C4.20041 17.105 3.55402 16.7384 3.20741 16.1517L2.56102 15.0517C2.21441 14.4559 2.19567 13.7409 2.54229 13.1725C2.69217 12.8975 2.97321 12.6225 3.29172 12.4484C3.55402 12.32 3.72265 12.1092 3.8819 11.8617C4.3503 11.0734 4.06926 10.0375 3.27299 9.57004C2.34556 9.04754 2.04579 7.88337 2.57976 6.97587L3.20741 5.89421C3.75075 4.98671 4.91238 4.66587 5.84917 5.19754C6.66418 5.63754 7.72276 5.34421 8.20052 4.56504C8.35041 4.30837 8.43472 4.03337 8.41599 3.75837C8.39725 3.40087 8.5003 3.06171 8.67829 2.78671C9.0249 2.21837 9.65255 1.85171 10.3364 1.83337H11.6573C12.3505 1.83337 12.9782 2.21837 13.3248 2.78671C13.4934 3.06171 13.6058 3.40087 13.5777 3.75837C13.559 4.03337 13.6433 4.30837 13.7932 4.56504C14.271 5.34421 15.3295 5.63754 16.1539 5.19754C17.0813 4.66587 18.2523 4.98671 18.7863 5.89421L19.4139 6.97587C19.9573 7.88337 19.6575 9.04754 18.7207 9.57004C17.9244 10.0375 17.6434 11.0734 18.1212 11.8617C18.2711 12.1092 18.4397 12.32 18.702 12.4484ZM8.35041 11.0092C8.35041 12.4484 9.54014 13.5942 11.0109 13.5942C12.4817 13.5942 13.6433 12.4484 13.6433 11.0092C13.6433 9.57004 12.4817 8.41504 11.0109 8.41504C9.54014 8.41504 8.35041 9.57004 8.35041 11.0092Z" fill="#865DFF" />
                            </svg>
                            Settings
                        </li>
                        <li onClick={handleLogout}>
                            <Link  >Logout</Link>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path d="M13.7627 6.77369V5.91844C13.7627 4.05303 12.2502 2.54053 10.3848 2.54053H5.91606C4.05156 2.54053 2.53906 4.05303 2.53906 5.91844V16.1209C2.53906 17.9864 4.05156 19.4989 5.91606 19.4989H10.394C12.2539 19.4989 13.7627 17.9909 13.7627 16.131V15.2666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.9907 11.0196H8.95312" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.3047 8.34741L19.9887 11.0195L17.3047 13.6925" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.0709 10.2942C8.66986 10.2942 8.35275 10.6059 8.35275 11C8.35275 11.385 8.66986 11.7059 9.0709 11.7059H14.6668V16.0875C14.6668 18.3334 12.8108 20.1667 10.5165 20.1667H5.97448C3.68948 20.1667 1.8335 18.3425 1.8335 16.0967V5.91254C1.8335 3.65754 3.69881 1.83337 5.98381 1.83337H10.5352C12.8108 1.83337 14.6668 3.65754 14.6668 5.90337V10.2942H9.0709ZM17.9945 7.82856L20.6712 10.4961C20.8087 10.6336 20.882 10.8077 20.882 11.0002C20.882 11.1836 20.8087 11.3669 20.6712 11.4952L17.9945 14.1627C17.857 14.3002 17.6737 14.3736 17.4995 14.3736C17.3162 14.3736 17.1328 14.3002 16.9953 14.1627C16.7203 13.8877 16.7203 13.4386 16.9953 13.1636L18.462 11.7061H14.667V10.2944H18.462L16.9953 8.83689C16.7203 8.56189 16.7203 8.11272 16.9953 7.83772C17.2703 7.55356 17.7195 7.55356 17.9945 7.82856Z" fill="#865DFF" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom" >
                <p>© 2024 NFTMARKET</p>
            </div>
        </div>

    )
}

