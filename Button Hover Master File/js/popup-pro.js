jQuery(document).ready(function (w) {
  if ("undefined" == typeof popup_frontend) return !1;
  var e = JSON.parse(popup_frontend?.dnxte_popup_show);
  (popupIds = e?.popup_ids).forEach((o) => {
    const n = w(".dnxte_popup_content_" + o).html(),
      t = JSON.parse(e["json_data" + o]);
    "true" === t?.remove_link && w("a#popup_" + o).removeAttr("href"),
      "true" === t?.close_clicking_back_button &&
        (window.history.pushState(null, null, ""),
        w(window).on("popstate", function () {
          w.magnificPopup.close();
        }));
    var i =
      "false" === t.prevent_page_scrolling ? "dnxte-prevent-scrolling" : "";
    const p = {
      items: { src: ".dnxte_popup_content_" + o },
      callbacks: {
        beforeClose: function () {
          w(".dnxte_popup_content.dnxte_popup_content_" + o)
            .removeClass("dnxte_popup_pro_" + t.opening_animation)
            .addClass("dnxte_popup_pro_" + t.closing_animation);
        },
        afterClose: function () {
          w(".dnxte_popup_content.dnxte_popup_content_" + o)
            .removeClass("dnxte_popup_pro_" + t.closing_animation)
            .addClass("dnxte_popup_pro_" + t.opening_animation);
        },
        open: function () {
          return !1;
        },
      },
      type: "inline",
      closeBtnInside: !JSON.parse(t.close_btn_outside.toLowerCase()),
      closeOnBgClick: JSON.parse(t.close_overlay_click.toLowerCase()),
      fixedContentPos: JSON.parse(t.prevent_page_scrolling.toLowerCase()),
      mainClass:
        `dnxte_popup_custom ${t.clickable_under_overlay} ${i} dnxte_popup_custom_` +
        o,
      removalDelay: 1e3,
      midClick: !0,
      closeMarkup:
        "false" === t.hide_close_button
          ? `<button title="" type="button" class="mfp-close ${t.closing_css_selector} dnxte_popup_pro_${t.close_btn_position}_close">&#215;</button>`
          : "",
    };
    if (
      !( 
        ("on" == t.dnxte_disable_desktop && 981 < w(window).width()) ||
        ("on" == t.dnxte_disable_tablet &&
          768 <= w(window).width() &&
          w(window).width() <= 981) ||
        ("on" == t.dnxte_disable_phone && w(window).width() < 768)
      )
    ) {
      i = JSON.parse(popup_frontend.dnxte_popup_show);
      let e = 0;
      var r,
        s,
        _,
        c,
        u =
          (e =
            "" !== t?.trigger_delay_start ? 1e3 * +t?.trigger_delay_start : e) +
          1e3 * t?.trigger_delay_end,
        l =
          ("trigger_on_none" === t?.trigger_event ||
            document.cookie.includes(`dxnteHours${o}=`) ||
            "every_time" == i["popup_perodicity" + o] ||
            ((l = new Date()).setTime(
              l.getTime() + i["periodicity_cookie" + o]
            ),
            (document.cookie =
              `dxnteHours${o}=true; expires=` + l.toUTCString() + "; path=/;")),
          JSON.parse(popup_frontend.trigger_event));
      if ("trigger_on_none" === t.trigger_event) {
        if (
          (w("#popup_" + o).on("click", function (e) {
            e.preventDefault(), n && w.magnificPopup.open(p);
          }),
          "" == i["custom_selector" + o])
        )
          return !1;
        w(i["custom_selector" + o]).on("click", function (e) {
          e.preventDefault(), n && w.magnificPopup.open(p);
        });
      } else if ("trigger_on_load" === t.trigger_event) {
        if (0 == e) w.magnificPopup.open(p);
        else {
          const f = setTimeout(() => {
            w.magnificPopup.open(p), clearTimeout(f);
          }, e);
        }
        if (e < u) {
          const v = setTimeout(() => {
            w.magnificPopup.close(), clearTimeout(v);
          }, u);
        }
      } else if ("trigger_on_scroll" === t.trigger_event) {
        let t = l[o];
        var d = !1;
        w(window).on("scroll", function () {
          var e = window.scrollY + window.innerHeight,
            o = document.documentElement.scrollHeight;
          let n = !1;
          "px" == t.onscroll_offset_units || d
            ? "px" != t.onscroll_offset_units ||
              d ||
              (window.scrollY >= t.onscroll_offset && ((n = !0), (d = !0)))
            : (e / o) * 100 >= t.onscroll_offset && ((n = !0), (d = !0)),
            n && w.magnificPopup.open(p);
        });
      } else
        "trigger_on_exit" === t.trigger_event
          ? document.addEventListener("mousemove", function (e) {
              var o = window.pageYOffset || document.documentElement.scrollTop;
              e.pageY - o < 7 && w.magnificPopup.open(p);
            })
          : "trigger_on_inactivity" === t.trigger_event &&
            ((i = l[o]),
            (r = 1e3 * i.oninactivity_delays),
            (s = function () {
              w.magnificPopup.open(p);
            }),
            (_ = function () {}),
            (c = 0),
            a());
      return !1;
      function a() {
        (c = setTimeout(m, r)),
          document.addEventListener("mousemove", g),
          document.addEventListener("keydown", g),
          document.addEventListener("touchstart", g);
      }
      function m() {
        (c = 0), s();
      }
      function g() {
        c ? clearTimeout(c) : _(),
          document.removeEventListener("mousemove", g),
          document.removeEventListener("keydown", g),
          document.removeEventListener("touchstart", g),
          setTimeout(a, 1e3);
      }
    }
  });
});
