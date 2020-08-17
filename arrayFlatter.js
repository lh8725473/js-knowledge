// 数组压平，比如[1, 2, [3, [4, 5, [6, [7, 8]]]]], 会被处理成[1, 2, 3, 4, 5, 6, 7, 8]。
function flatten (list) {
  if(list.length === 0) return [];
  const head = list[0];
  if(head instanceof Array){
    list[0] = flatten(head)
  } else {
    list[0] = head
  }

  return list[0].concat(flatten(list.slice(1))));
}