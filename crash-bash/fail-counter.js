"use strict";

let fail_counter_text_elt = document.getElementById("fail-counter");

let fail_count = 0;
let fail_count_elt = document.getElementById("fail-count");

fail_counter_text_elt.addEventListener("click",
    function(event) {
        if (event.shiftKey) {
            fail_count = Math.max(0, fail_count - 1);
        } else {
            fail_count++;
        };
        fail_count_elt.innerText = "× " + String(fail_count);
    }
)