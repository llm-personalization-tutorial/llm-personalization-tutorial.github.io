(function () {
  document.querySelectorAll(".presenter-photo img").forEach((image) => {
    const markLoaded = () => {
      if (image.complete && image.naturalWidth > 0) {
        image.closest(".presenter-photo")?.classList.add("has-image");
      }
    };

    image.addEventListener("load", markLoaded);
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest(".presenter-photo")?.classList.add("is-missing");
    });
    markLoaded();
  });

  const copyButton = document.querySelector("[data-copy-target]");
  const copyStatus = document.querySelector("[data-copy-status]");

  if (!copyButton) {
    return;
  }

  const setStatus = (message, isError) => {
    if (!copyStatus) {
      return;
    }

    copyStatus.textContent = message;
    copyStatus.classList.toggle("is-error", Boolean(isError));

    window.clearTimeout(setStatus.timeoutId);
    setStatus.timeoutId = window.setTimeout(() => {
      copyStatus.textContent = "";
      copyStatus.classList.remove("is-error");
    }, 2400);
  };

  const selectTargetText = (target) => {
    if (!target || !window.getSelection) {
      return false;
    }

    const range = document.createRange();
    range.selectNodeContents(target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  };

  const fallbackCopy = (text, target) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand("copy");
      if (success) {
        setStatus("BibTeX copied.");
      } else if (selectTargetText(target)) {
        setStatus("BibTeX selected. Press Cmd+C or Ctrl+C to copy.");
      } else {
        setStatus("Copy failed. Please copy manually.", true);
      }
    } catch (error) {
      if (selectTargetText(target)) {
        setStatus("BibTeX selected. Press Cmd+C or Ctrl+C to copy.");
      } else {
        setStatus("Copy failed. Please copy manually.", true);
      }
    } finally {
      document.body.removeChild(textarea);
    }
  };

  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : null;
    const text = target ? target.textContent.trim() : "";

    if (!text) {
      setStatus("Nothing to copy.", true);
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        setStatus("BibTeX copied.");
        return;
      } catch (error) {
        fallbackCopy(text, target);
        return;
      }
    }

    fallbackCopy(text, target);
  });
})();
