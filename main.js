// JSON 데이터를 가져와 포스팅 목록을 생성하는 함수
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}


function generatePostList() {
  fetch('/getPosts', headers)
    .then(response => response.json())
    .then(data => {
      const postList = document.getElementById('postList');
      const posts = data.body;
      console.log(data);

      posts.reverse().forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<h2>${post.title}</h2>
                        <h4>작성자: ${post.name}</h4>
                        <p class="contentFormat">${post.content}</p>
                        <p class="timeFormat">${post.time}</p>`;
        postList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}



function generateTimetable() {
  fetch('/getTimetable', headers)
    .then(response => response.json())
    .then(data => {
      const timetableList = document.getElementById('timetableList');
      const timetables = data.body;
      console.log(data);

      const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
      const dayOfWeek = daysOfWeek[new Date().getDay()];
      const day = document.createElement('h2');
      day.innerHTML = dayOfWeek;
      timetableList.appendChild(day);

      timetables.forEach(timetable => {
        const tr = document.createElement('tr');
        const timetd = document.createElement('td');
        timetd.innerHTML = `${timetable.time}교시`;
        tr.appendChild(timetd);
        const subjecttd = document.createElement('td');
        subjecttd.innerHTML = timetable.subject;
        tr.appendChild(subjecttd);
        timetableList.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error fetching timetable:', error);
    });
}

// 페이지 로드 완료 시 포스팅 목록을 생성합니다
window.addEventListener('load', () => {
  generatePostList();
  generateTimetable();
});


