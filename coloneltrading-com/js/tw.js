jQuery(function($){
    $(".tweet").tweet({
        username: "coloneltrading",
        join_text: "auto",
        avatar_size: 0,
        count: 3,
        auto_join_text_default: "<b>:</b>",
        auto_join_text_ed: "<b>:</b>",
        auto_join_text_ing: "<b>:</b>",
        auto_join_text_reply: "<b>:</b>",
        auto_join_text_url: "<b>:</b>",
        loading_text: "Loading tweets..."
    });
});