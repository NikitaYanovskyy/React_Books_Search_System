import React from 'react'

export const BookTextContentLoader = () =>{
    return(
        <div className="book_card_text_wrapper">
            <div className="book_card_title_wrapper">
                <div className="title book_card_preloader_bg"></div>
            </div>
            <div className="book_card_preloader_bg author regular_text fixed_width"></div>
            <div className="book_card_separating_line"></div>
            <div className="book_card_preloader_bg category regular_text book_card_item_margin"></div>

            <div className="book_card_text_flex">
                <div>
                    <div className="book_card_preloader_bg language regular_text book_card_item_margin"></div>
                    <div className="book_card_preloader_bg maturity_rating regular_text book_card_item_margin"></div>
                    <div className="book_card_preloader_bg pages regular_text book_card_item_margin"></div>
                    <div className="book_card_preloader_bg book_price book_card_item_margin"></div>
                </div>
                <div>
                    <div className="book_card_preloader_bg country margin_left regular_text book_card_item_margin"></div>
                    <div className="book_card_preloader_bg publisher margin_left regular_text book_card_item_margin"></div>
                    <div className="book_card_preloader_bg published_date margin_left regular_text book_card_item_margin"></div>
                </div>
            </div>
        </div>
    )
}

