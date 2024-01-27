---
layout: page
title: Table
description: Display tabulated data
---

{% include try-it-out.html code='<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Rarity</th>
      <th scope="col">Element</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">1</th>
      <td>Sushang</td>
      <td>4</td>
      <td>Physical</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Qingque</td>
      <td>4</td>
      <td>Quantum</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Blade</td>
      <td>5</td>
      <td>Wind</td>
    </tr>
  </tbody>
</table>' %}