let modalContainer = document.getElementById("modal");
let SignInBtn = document.getElementById("SignIn");
let WriteBtn = document.getElementById("write");
let closeBtn = document.getElementById("close");
let getStartedBtn = document.getElementById("getstarted");


SignInBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  document.getElementById("heading").textContent = "Welcome Back.";
  document.getElementById("sign-inOptions").innerHTML = `
      <div
              class="btn1 flex w-[300px] border border-black py-2 px-2 justify-center items-center text-center relative rounded-3xl"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/2504/2504739.png?uid=R119434888&ga=GA1.2.1595656739.1707210196&semt=ais_hybrid"
                alt=""
                width="20"
                border-black
                class="absolute left-2"
              />
              <button class="inter-400 text-base">Sign in with Google</button>
            </div>
            <div
              class="btn2 flex w-[300px] border border-black py-2 px-2 justify-center items-center text-center relative rounded-3xl"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?uid=R119434888&ga=GA1.1.1595656739.1707210196&semt=ais_hybrid"
                alt=""
                width="20"
                class="absolute left-2"
              />
              <button class="inter-400 text-base">Sign in with Facebook</button>
            </div>
            <div
              class="btn5 flex w-[300px] border border-black py-2 px-2 justify-center items-center text-center relative rounded-3xl"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/10905/10905071.png?uid=R119434888&ga=GA1.1.1595656739.1707210196&semt=ais_hybrid"
                alt=""
                width="20"
                class="absolute left-2"
              />
              <button class="inter-400 text-base">Sign in with E-Mail</button>
            </div>
           <div
              class="btn1 flex w-[300px] border border-black py-2 px-2 justify-center items-center text-center relative rounded-3xl"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/11823/11823292.png?ga=GA1.1.1595656739.1707210196&semt=ais_hybrid"
                alt=""
                width="20"
                border-black
                class="absolute left-2"
              />
              <button class="inter-400 text-base">Sign in with Twitter</button>
            </div>
            <div
              class="btn1 flex w-[300px] border border-black py-2 px-2 justify-center items-center text-center relative rounded-3xl"
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/731/731985.png?ga=GA1.1.1595656739.1707210196&semt=ais_hybrid"
                alt=""
                width="20"
                border-black
                class="absolute left-2"
              />
              <button class="inter-400 text-base">Sign in with Apple</button>
            </div>
            `;
});

WriteBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

getStartedBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

document.getElementById("startReading").addEventListener("click", () => {
  modalContainer.style.display = "block";
});

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("sec5").style.backgroundColor = "#" + randomColor;
}

// Change color every second (1000 milliseconds)
setInterval(changeColor, 1000);
