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
      day.textContent = dayOfWeek;
      timetableList.appendChild(day);

      timetables.forEach(timetable => {
        const row = document.createElement('tr');
        const timeCell = document.createElement('td');
        timeCell.textContent = `${timetable.time}교시`;
        row.appendChild(timeCell);
        const subjectCell = document.createElement('td');
        subjectCell.textContent = timetable.subject;
        row.appendChild(subjectCell);
        timetableList.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching timetable:', error);
    });
}

/*
function generateTimetable() {
  fetch('/getTimetable', headers)
    .then(response => response.json())
    .then(data => {
      const timetableList = document.getElementById('timetableList');
      const timetables = data.body;
      console.log(data);

      
      timetables.forEach(timetable => {
        const li = document.createElement('li');
        li.innerHTML = `<h2>${timetable.day}</h2>
                        <h4>${timetable.subject}</h4>
                        <p class="contentFormat">${timetable.time}</p>`;
        timetableList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching timetable:', error);
    });
}
*/
// 페이지 로드 완료 시 포스팅 목록을 생성합니다
window.addEventListener('load', () => {
  generatePostList();
  generateTimetable();
});



/*
//save post
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('titleInput');
const contentInput = document.getElementById('contentInput');

postForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 기본 동작 방지

  const title = titleInput.value;
  const content = contentInput.value;

  savePost(title, content);
});

function savePost(title, content) {
  const url = "/savePost?title=" + title +"&content=" + content;
  fetch('/savePost', {
    credentials: "include",
    headers: headers,
  })
    .then(response => response.json())
    .then(data => {
      console.log('Post saved successfully:', data);
      // 저장 성공 시 추가 작업 수행
    })
    .catch(error => {
      console.error('Error saving post:', error);
      // 오류 발생 시 추가 작업 수행
    });
}
*/


/*
// 포스팅 생성 폼 제출 핸들러
function handleFormSubmit(event) {
  event.preventDefault(); // 폼 제출 기본 동작 방지

  const form = event.target;
  const title = form.title.value;
  const content = form.content.value;

  const data = { title, content };

  fetch('/api/posts', headers, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(message => {
      alert(message); // 저장 성공 메시지 출력
      form.reset(); // 폼 초기화
    })
    .catch(error => {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    });
}

// 폼 제출 이벤트 리스너 등록
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', handleFormSubmit);



function generatePostList() {
  fetch('/api/posts', headers)
    .then(response => response.json())
    .then(data => {
      const postList = document.getElementById('postList');
      const posts = data.body;
      console.log(data);

      posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${post.title}</h3>
                        <p>${post.content}</p>`;
        postList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

// 페이지 로드 완료 시 포스팅 목록을 생성합니다
window.addEventListener('load', generatePostList);
*/