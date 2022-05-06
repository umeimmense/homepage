---
title: 'React 中的事件冒泡和捕获'
date: 2022-04-10 16:17:20
tags: [React]

---
## 前言
本文主题是React事件冒泡和捕获的 。大多数 JavaScript 开发人员可能已经熟悉这个主题，因为它起源于 JavaScript 及其 DOM API。但是，在本文中，我想为 React 中的事件冒泡和捕获整理一些信息。

React 中的事件处理程序可用于侦听特定事件（例如单击事件）。我们将从 React 中的一个函数组件开始，我们使用 React 的 useState Hook 来增加一个计数器：
```jsx
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button type="button" onClick={handleClick}>
      Count: {count}
    </button>
  );
}

export default App;
```
在原生 JavaScript 中，这相当于 element.addEventListener('click', handleClick);。 React 中有很多事件。下面显示了鼠标和触摸事件的事件列表：
- touchstart
- touchmove
- touchend
- mousemove
- mousedown
- mouseup
- click
此特定事件列表按其执行顺序显示。因此，如果在 HTML 元素中添加了 mouseup 和 click 事件侦听器，则 mouseup 事件将在 click 事件之前触发：
```jsx
import * as React from 'react';

function App() {
  const handleClick = () => {
    alert('click');
  };

  const handleMouseUp = () => {
    alert('mouseup');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseUp={handleMouseUp}
    >
      Which one fires first?
    </button>
  );
}

export default App;
```
在某些情况下，你可能希望在另一个事件触发时阻止其中一个事件。例如，当触摸事件发生并被处理时，你可能希望阻止所有点击事件。

无论如何，在前面的示例中，所有事件都发生在同一个 HTML 元素上。关于事件冒泡或捕获还没有什么可看的。接下来，让我们探索使用多个 HTML 元素的事件冒泡：
```jsx
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount((state) => state + 1);
  };

  return (
    <div onClick={handleCount}>
      <button type="button" onClick={handleCount}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
```
在这个例子中，按钮似乎被点击了两次，因为计数器增加了 2 而不是 1。然而，发生的事情是包装容器元素也调用了它的事件处理程序。进入在 React 中事件冒泡。

## React 中的事件冒泡
下面的示例显示了两个具有相同样式的 HTML 元素。为了简单起见，我们在这里使用内联样式，但是，你可以随意使用更复杂的方式来设置你的 React 应用程序的样式。

无论如何，让我们进入事件冒泡的话题。如你所见，在下一个示例中，只有外部容器元素侦听单击事件，而不是内部容器元素。但无论你是单击外部元素还是内部元素，都会触发事件处理程序：
```jsx
import * as React from 'react';

const style = {
  padding: '10px 30px',
  border: '1px solid black',
};

function App() {
  const handleClick = () => {
    alert('click');
  };

  return (
    <div style={style} onClick={handleClick}>
      <div style={style}>Click Me</div>
    </div>
  );
}

export default App;
```
在 JavaScript 中，这个原理称为事件冒泡。每当在 HTML 元素（例如内部 HTML 元素）上发生事件时，它就会开始运行通过该特定元素的处理程序，然后是其父 HTML 元素（例如外部 HTML 元素，它实际上在其中找到侦听处理程序）的处理程序，然后一直向上遍历每个祖先 HTML 元素，直到它到达文档的根。
![](https://umeimmense.github.io/post-images/1649934566165.png)
在下一个示例中尝试一下，当单击内部 HTML 元素时，两个事件处理程序都会被触发。如果单击外部 HTML 元素，则仅触发外部元素的事件处理程序：
```jsx
import * as React from 'react';

const style = {
  padding: '10px 30px',
  border: '1px solid black',
};

function App() {
  const handleOuterClick = () => {
    alert('outer click');
  };

  const handleInnerClick = () => {
    alert('inner click');
  };

  return (
    <div style={style} onClick={handleOuterClick}>
      <div style={style} onClick={handleInnerClick}>
        Click Me
      </div>
    </div>
  );
}

export default App;
```
换句话说，事件从它们的起源开始冒泡整个文档。通过 React 的 useEffect Hook 在文档上添加一个事件监听器，自己验证这种行为：
```jsx
import * as React from 'react';

const style = {
  padding: '10px 30px',
  border: '1px solid black',
};

function App() {
  const handleOuterClick = () => {
    alert('outer click');
  };

  const handleInnerClick = () => {
    alert('inner click');
  };

  React.useEffect(() => {
    const handleDocumentClick = () => {
      alert('document click');
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div style={style} onClick={handleOuterClick}>
      <div style={style} onClick={handleInnerClick}>
        Click Me
      </div>
    </div>
  );
}

export default App;
```
因此，如果一个事件从其交互元素中冒出整个文档，那么在某些情况下如何停止冒泡呢？在 React 中输入 stopPropagation

## React  stopPropagation
stopPropagation() 方法是 DOM API 的原生方法。由于 React 将事件包装到称为合成事件的 React 版本中，因此该 API 仍然可用于 React 事件，它还可以用于停止事件的传播：
```jsx
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const handleCount = (event) => {
    setCount((state) => state + 1);

    event.stopPropagation();
  };

  return (
    <div onClick={handleCount}>
      <button type="button" onClick={handleCount}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
```
我们通过对事件使用 stopPropagation() 方法扩展了前面的示例之一。这样，当按钮被点击时，事件不会冒泡，也不会触发周围容器元素的事件处理程序。
![](https://umeimmense.github.io/post-images/1649934812136.png)
反之，当容器元素被显式点击时（在这种情况下不太可能没有任何进一步的样式），只有容器的事件处理程序会触发。这里容器元素上的 stopPropagation() 有点多余，因为它上面没有事件处理程序。

最佳时机：默认情况下不要停止事件传播。例如，如果你将在项目中的每个按钮上使用 stopPropagation()，但稍后你想在文档级别跟踪用户点击，你将不会再收到这些事件。默认情况下使用 stopPropagation() 往往会导致错误，因此仅在必要时使用它。

当停止事件传播有意义时，让我们看看更复杂的场景。例如，可能有一个可点击的标题，可以将用户从任何页面导航到主页，但是，在标题内有一个按钮可以让用户从应用程序中注销。两个元素都应该是可点击的，不会相互干扰：
```jsx
import * as React from 'react';

const styleHeader = {
  padding: '10px',
  border: '1px solid black',
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

function App() {
  const [isActive, setActive] = React.useState(false);

  const handleHeaderClick = () => {
    alert('header click (e.g. navigate to home page)');
  };

  const handleButtonClick = (event) => {
    alert('button click (e.g. log out user)');

    if (isActive) {
      event.stopPropagation();
    }
  };

  return (
    <>
      <div style={styleHeader} onClick={handleHeaderClick}>
        <div>Header</div>
        <button type="button" onClick={handleButtonClick}>
          Log Out
        </button>
      </div>

      <button type="button" onClick={() => setActive(!isActive)}>
        Stop Propagation: {isActive.toString()}
      </button>
    </>
  );
}

export default App;
```
在不停止传播的情况下，注销按钮将触发它自己的事件处理程序，但也会触发标题上的事件处理程序，因为事件会冒泡到它上面。当 stopPropagation() 被激活时，单击注销按钮不会导致标题上的冒泡事件，因为该事件被阻止冒泡。

总之，只要有一个带有处理程序的元素嵌套在另一个带有处理程序的元素中，两者都在侦听相同的事件（这里：单击事件），使用 stopPropagation() 将有助于将事件委托给正确的处理程序（通过防止他们从冒泡）。

## target && currentTarget
当单击带有监听器（事件处理程序）的 HTML 元素时，你可以访问它的事件（在 React 中它是合成事件）。在其他属性中，事件可以访问表示导致事件的元素的目标属性。因此，如果按钮具有事件处理程序并且用户单击此按钮，则该事件将以按钮元素作为目标。

即使这个事件冒泡到另一个事件处理程序，如果一个嵌套元素导致了这个事件，那么目标仍然由这个嵌套元素表示。因此，在所有处理程序中，事件的目标都不会改变。

从事件处理程序到事件处理程序的变化是事件的 currentTarget，因为它表示实际事件处理程序正在运行的元素：
```jsx
import * as React from 'react';

const style = {
  display: 'block',
  padding: '10px 30px',
  border: '1px solid black',
};

function App() {
  const handleDivClick = (event) => {
    alert(`
      <div /> \n
      event.target: ${event.target} \n
      event.currentTarget: ${event.currentTarget}
    `);
  };

  const handleSpanClick = (event) => {
    alert(`
      <span /> \n
      event.target: ${event.target} \n
      event.currentTarget: ${event.currentTarget}
    `);
  };

  return (
    <div style={style} onClick={handleDivClick}>
      <span style={style} onClick={handleSpanClick}>
        Click Me
      </span>
    </div>
  );
}

export default App;
```
通常你将与事件的目标进行交互，例如停止事件的传播或阻止默认行为。但是，有时你希望从正在运行的事件处理程序访问元素，因此你可以改用 currentTarget。

## React 中的事件捕获
当谈到 JavaScript 中的事件冒泡时，不得不提的是存在事件捕获的概念。实际上两者都是依次发生的：当用户与元素交互时，DOM API 会向下遍历文档（捕获阶段）到目标元素（目标阶段），然后 DOM API 才会再次向上遍历（冒泡阶段）。
![](https://umeimmense.github.io/post-images/1649935104214.png)

在某些情况下，你可能希望在捕获阶段中的事件到达冒泡阶段之前对其进行拦截。然后，你可以使用 onClickCapture 而不是 onClick 来处理 JSX 中的单击事件，或者使用 addEventListener() 方法的第三个参数来激活在捕获阶段而不是冒泡阶段的监听：
```jsx
function App() {
  const handleOuterClick = () => {
    alert('outer click');
  };

  const handleInnerClick = () => {
    alert('inner click');
  };

  React.useEffect(() => {
    const handleDocumentClick = () => {
      alert('document click');
    };

    document.addEventListener(
      'click',
      handleDocumentClick,
      true
    );

    return () => {
      document.removeEventListener(
        'click',
        handleDocumentClick,
        true
      );
    };
  }, []);

  return (
    <div style={style} onClickCapture={handleOuterClick}>
      <div style={style} onClickCapture={handleInnerClick}>
        Click Me
      </div>
    </div>
  );
}
```
谈到“某些情况”有点含糊。因此，让我们回到前面的示例，其中我们将注销按钮嵌套在标题元素中。如果单击该按钮以不触发标头的事件处理程序，则该按钮将停止事件的传播。现在，如果你想通过在顶级文档级别引入分析跟踪来扩展此示例，你可以验证自己对于单击按钮，你不会收到分析跟踪，而只会收到标题，因为按钮阻止了从冒泡到文档的事件：
```jsx
function App() {
  const handleHeaderClick = () => {
    alert('header click (e.g. navigate to home page)');
  };

  const handleButtonClick = (event) => {
    alert('button click (e.g. log out user)');

    // important: stops event from appearing
    // in the document's event handler
    event.stopPropagation();
  };

  React.useEffect(() => {
    const handleDocumentClick = (event) => {
      alert(`
        document clicked - \n
        run analytics for clicked element: ${event.target}
      `);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div style={styleHeader} onClick={handleHeaderClick}>
        <div>Header</div>
        <button type="button" onClick={handleButtonClick}>
          Log Out
        </button>
      </div>
    </>
  );
}
```
凭借我们对捕获阶段的了解，我们可以在实际用户交互冒泡之前对事件进行分析跟踪。在这种情况下，我们通过将第三个参数设置为 true（使用捕获阶段而不是冒泡阶段）在文档上添加事件侦听器：
```jsx
function App() {
  const handleHeaderClick = () => {
    alert('header click (e.g. navigate to home page)');
  };

  const handleButtonClick = (event) => {
    alert('button click (e.g. log out user)');

    // important: stops event from appearing
    // in the document's event handler
    event.stopPropagation();
  };

  React.useEffect(() => {
    const handleDocumentClick = (event) => {
      alert(`
        document clicked - \n
        run analytics for clicked element: ${event.target}
      `);
    };

    document.addEventListener(
      'click',
      handleDocumentClick,
      true
    );

    return () => {
      document.removeEventListener(
        'click',
        handleDocumentClick,
        true
      );
    };
  }, []);

  return (
    <>
      <div style={styleHeader} onClick={handleHeaderClick}>
        <div>Header</div>
        <button type="button" onClick={handleButtonClick}>
          Log Out
        </button>
      </div>
    </>
  );
}
```
当点击注销按钮时，捕获阶段从上到下遍历所有处理程序，从而触发文档级别的处理程序进行分析跟踪。然后它向下遍历元素到目标（此处：按钮），因为没有其他事件处理程序正在侦听捕获阶段（例如，通过使用 onClickCapture 代替）。从那里，事件冒泡并触发按钮的事件处理程序，阻止事件传播到标题的事件处理程序。
![](https://umeimmense.github.io/post-images/1649935259980.png)

在日常工作中，大多数开发人员使用冒泡阶段通过使用事件处理程序来拦截事件，并使用 stopPropagation() 方法阻止事件传播。因此，在开发人员的脑海中，总是有事件模型在 HTML 树中冒泡。然而，正如某些边缘情况所示，了解捕获阶段也是有意义的。

理解 JavaScript 中的事件冒泡对于在 React 中使用它至关重要。每当你有一个复杂的页面，其中带有事件处理程序的伪按钮被包装到其他伪按钮中时，就无法绕过本机 stopPropagation 方法。但是，请谨慎使用它，而不是默认使用它，否则从长远来看，你可能会遇到错误。



