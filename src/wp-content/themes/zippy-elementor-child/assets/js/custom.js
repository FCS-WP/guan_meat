$(document).ready(function ($) {
  // Hide Filter
  var selected_filter = $(".wpc-filters-ul-list.wpc-filters-list-106");
  var limit = 8;
  var items = selected_filter.children("li");
  var btn = $(
    '<button type="button" class="wpc-see-more-btn">See more</button>',
  );
  var expanded = false;
  if (items.length <= limit) return;
  items.slice(limit).hide();
  btn.on("click", function () {
    expanded = !expanded;
    items.slice(limit).toggle(expanded);
    btn.text(expanded ? "See less" : "See more");
  });
  selected_filter.after(btn);
});
