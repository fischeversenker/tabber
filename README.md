<h1>Documentation</h1>
<div>
  <h2>Installation</h2>
  <div>
    <ul>
      <li><b>Requires jQuery</b></li>
      <li><b>Loading async only works when served</b></li>
    </ul>
    <p>Just load files <pre>&lt;link rel="stylesheet" href="tabber.css" /&gt;
&lt;script src="tabber.js"&gt;&lt;/script&gt;</pre>
      and you can use following classes and options:
    </p>
  </div>
  <h3>Tab-Group</h3>
  <div>
    <p>Group of tabs. Add class <em>tab-group</em> to container.</p>
    <pre>&lt;div class="tab-group" [data-tab-open="{index}"]&gt;
      {...}
&lt;/div&gt;</pre>
    <h4>Options</h4>
    <ul>
      <li>
        <em>data-tab-open</em><br>defines opened tab on page-load (default: first).
      </li>
    </ul>
  </div>
</div>
<div>
  <h3>Tab</h3>
  <div>
    <p>Define a tab with class <em>tab</em>:</p>
    <pre>&lt;div class="tab" [data-tab-name="Documentation"] [data-tab-file="documentation.html"]&gt;
  {...}
&lt;/div&gt;</pre>
    <h4>Options</h4>
    <ul>
      <li>
        <em>data-tab-name</em><br>
        defines the name of the tab used in the opener-bar (default: "Tab {index}").
      </li>
      <li>
        <em>data-tab-file</em><br>defines the file to load the content from asynchronously.
        If this attribute is missing the content of the tab is not loaded asynchronously.
      </li>
    </ul>
  </div>
</div>
