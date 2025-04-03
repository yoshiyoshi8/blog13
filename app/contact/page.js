'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState < string > '';
  return (
    <div>
      <form
        action="https://business.form-mailer.jp/fm/service/Forms/confirm"
        method="post"
        name="form1"
        enctype="multipart/form-data"
        accept-charset="UTF-8"
      >
        <input type="hidden" name="key" value="59bd08b7271275" />

        <p>
          お名前<span>必須</span>
        </p>
        <input
          name="field_4801323"
          type="text"
          onChange={(e) => setName(e.target.value)}
          size="30"
          placeholder="例）山田 太郎"
        />
        <p>
          メールアドレス<span>必須</span>
        </p>
        <input
          name="field_4800967"
          type="text"
          value={someValue}
          size="30"
          placeholder="info@example.com"
        />
        <p>
          電話番号<span>必須</span>
        </p>
        <input
          name="field_4800971"
          type="text"
          value={someValue}
          size="30"
          placeholder="090-0000-0000"
        />

        <input name="submit" type="submit" value="確認画面へ" />

        <input type="hidden" name="code" value="utf8"></input>
      </form>
    </div>
  );
};

export default Contact;
