---
layout: page
title: Form
description: Fill things out and submit them
---

{% include try-it-out.html code='<h2>Sign-up</h2>
<form class="m-3">
  <div class="mb-3">
    <label for="usernameInput" class="form-label">Username</label>
    <input type="text" class="form-control is-invalid" id="usernameInput" value="ben" />
    <div class="invalid-feedback">
      Invalid username
    </div>
  </div>
  <div class="mb-3">
    <label for="passwordInput" class="form-label">Password</label>
    <input type="password" class="form-control" id="passwordInput" />
  </div>
  <div class="mb-3">
    <label for="proficiencyInput" class="form-label">Proficiency</label>
    <select class="form-select" id="proficiencyInput">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Expert</option>
    </select>
  </div>
  <div class="mb-3">
    <div class="form-check">
      <label for="consentInput" class="form-label">Subscribe to our newsletter?</label>
      <input class="form-check-input" type="checkbox" id="consentInput" checked>
    </div>
  </div>
  <div class="mt-3 d-flex flex-row justify-content-end">
    <a class="btn btn-outline-primary me-2" href="#">Cancel</a>
    <button class="btn btn-primary">Submit</button>
  </div>
</form>' %}