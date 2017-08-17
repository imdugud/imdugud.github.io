function postForm(dom, name, data, dataType) {
  var url = dom.attr('data-url');
  var objectID = dom.attr('data-id');

  $.ajax({
    dataType: dataType,
    url: url,
    type: 'post',
    data: {name: name, id: objectID, value: data},
    context: document.body,
    error: function (xhr, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
    success: function (data, textStatus, xhr) {
      console.log(data);
      if (data.OK != 1) {
        alert(data.MSG);
      } else if (data.OK == 1) {
        alert(data.MSG);
      }
    }
  });
}