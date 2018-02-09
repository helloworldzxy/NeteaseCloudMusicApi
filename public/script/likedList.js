function handleClick() {
  // console.log('handleClick');
  $("tbody").empty();
  $.ajax({
    url: "/comment/music",
    type: "GET",
    data: {
      id: $("input[name='sid']").val() || 65538,
      offset: 0, //目前只看了第一页
      limit: 20
    }
  }).done(function(res) {
    console.log("ajax success res: ", res);
    let { hotComments } = res;
    // console.log('hotComments = ', hotComments);
    $.each(hotComments, function(idx, item) {
      // console.log('item = ', item);
      let str = "";
      if (item.liked) {
        str += "<tr><td align='center'>";
        str += `<img src=${item.user.avatarUrl}>`;
        str += "</td><td>";
        str += `${item.user.nickname}`;
        str += "</td><td>";
        str += `${item.content}`;
        str += "</tr>";
        $("tbody").append(str);
      }
    });
  });
}
