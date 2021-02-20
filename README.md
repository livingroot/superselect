# superselect
Better and simple &lt;select&gt; or &lt;datalist&gt; realisation.

![demo](/demo.gif)

```
<div class="superselect_group">
  <!-- shown element. options=".ss_options ID"-->
  <input placeholder="choose or type" type="text" class="superselect" options="list1"/>
  <!-- hidden input, which contains value. id= ss_options element ID + _data-->
  <input type="hidden" id="list1_data" name="this_is_value"/>
  <div class="ss_options" id="list1">
    <div value="val1">variant1</div>
    <div value="val2">option2</div>
    <div value="val3">test3</div>
    <div value="val4">hello</div>
    <div value="val5">AsDfGh</div>
  </div>
</div>
```
