
const nid = "...!@BaT#*..y.abcdefghijklm";

    var ans = "";
    for (let i = 0; i < nid.length; i++) {
        //1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
      let c = nid[i].toLowerCase();
      //2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
      if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
      
      if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
      ans += c;
    }

    console.log(ans)
    console.log("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf('@') === -1)
    