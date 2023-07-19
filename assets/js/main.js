function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.scr = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `<li>
    <img
      src="${skill.logo}"
      alt="${skill.name}"
    />
  </li>`
    )
    .join("");
}

function updateEducacao(profileData) {
    const educacao = document.getElementById("profile.educacao");
    educacao.innerHTML = profileData.skills.badge
      .map(
        (skill) => `<li>
        <li>
        <div class="badge">
          <img src="${skill.logo}" alt="${skill.name}">
        </div>
      </li>`
      )
      .join("");
  }

function updatePorfolio(profileData) {
    const portfolio = document.getElementById("profile.portfolio");
    portfolio.innerHTML = profileData.portfolio
      .map((portfolio) => `<li>
      <span class="title github">${portfolio.name}</span>
      <div class="links">
        <a
          href="${portfolio.url}"
          target="_blank"
        >
          <p>
            Github: ${portfolio.url}
          </p>
        </a>
        <a
          href="${portfolio.pages}"
          target="_blank"
        >
          <p>
            Visualizar: ${portfolio.pages}
          </p>
        </a>
      </div>
    </li>`)
      .join("");
  }
(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updatePorfolio(profileData);
  updateEducacao(profileData);
})();
