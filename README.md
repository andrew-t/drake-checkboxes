# Drake Checkbox

This is a checkbox styled to use the Drake meme.

```html
<drake-checkbox checked></drake-checkbox>
```

![Examples of the checkboxes, in the form of a fast food order input. Drake is smiling and pointing to "burger", "fries" and "cheese", but frowning and putting his hand up to "pickle" and "mayonnaise"](https://raw.githubusercontent.com/andrew-t/drake-checkboxes/refs/heads/main/img/example.png);

## Can We Not?

I get it, we don't like Drake, so we provide two alternatives

```html
<drake-checkbox format="geordi"></drake-checkbox>
<drake-checkbox format="matt-parker"></drake-checkbox>
```

## Usage

You can control the checkbox with the `.checked` property or the `checked` attribute just like any checkbox. Both of these are read-write so you can get the value out.

You can enable or disable the checkbox with the `.disabled` property or the `disabled` attribute just like any checkbox.

## Limitations

Drake Checkboxes don't support the "indeterminate" state because the meme format doesn't have an image for that.
