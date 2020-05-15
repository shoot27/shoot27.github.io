'use strict'

{
const shuto = document.querySelectorAll('.staff-list > ul > li')[0];
const sayaka = document.querySelectorAll('.staff-list > ul > li')[1];
const akito = document.querySelectorAll('.staff-list > ul > li')[2];
const kaho = document.querySelectorAll('.staff-list > ul > li')[3];
const hiroki = document.querySelectorAll('.staff-list > ul > li')[4];
const name = document.querySelector('.staff-introduce > h3');
const img = document.querySelector('.main-staff > img');
const text1 = document.querySelectorAll('.staff-introduce > p')[0];
const text2 = document.querySelectorAll('.staff-introduce > p')[1];
const text3 = document.querySelectorAll('.staff-introduce > p')[2];

shuto.addEventListener('click', () => {
  name.textContent = '田治米秋人';
  text1.textContent = `今の流行や街の人がどんなものに興味があるのかを見ながら、横浜や桜木町に買い物に行く事が多いです。最近は、スタッフと一緒にモデルさんの撮影をして、メイクやトータルコーディネイトなど、サロンワーク以外の勉強もしています。`;
  text2.textContent ='ミディアムからロングのナチュラルなウェーブスタイルが得意です。 ';
  text3.textContent = '髪型が決まった時や髪の悩みが解消された時って気分があがりますよね！！そんなうれしい時間が少しでも増えるように、お手伝いできたらうれしいです。';
  img.src = "img/田治米秋人 (2).jpg";
  });
sayaka.addEventListener('click', () => {
  name.textContent = '山田紗矢香';
  text1.textContent = `歩く。散歩というわけではないですが、普段は歩かない距離を歩いてみたり、街を歩いたり、話題の場所に出かけてみて観察しています。まだまだ知らない事や行った事のない所へ行くと、スタイルの勉強にもなりますし、新鮮でリフレッシュできます。`;
  text2.textContent ='ふんわりミディアムパーマスタイル';
  text3.textContent = 'お店にご来店して下さっている時間の居心地良さや普段の悩みや相談に、親身に向き合ってお話して解決に1歩近づけていけたらと思っています。';
  img.src = "img/山田紗矢香 (2).jpg";
  });
akito.addEventListener('click', () => {
  name.textContent = '大村暁人';
  text1.textContent = `今の流行や街の人がどんなものに興味があるのかを見ながら、横浜や桜木町に買い物に行く事が多いです。最近は、スタッフと一緒にモデルさんの撮影をして、メイクやトータルコーディネイトなど、サロンワーク以外の勉強もしています。`;
  text2.textContent ='ミディアムからロングのナチュラルなウェーブスタイルが得意です。';
  text3.textContent = 'お店にご来店して下さっている時間の居心地良さや普段の悩みや相談に、親身に向き合ってお話して解決に1歩近づけていけたらと思っています。';
  img.src = "img/大村暁人 (2).jpg";
  });
kaho.addEventListener('click', () => {
  name.textContent = '中村花穂';
  text1.textContent = `友人とショッピングをしたり家でご飯を作って一緒に食べてホームパーティ風なことをしてみたり、少し遠くまでドライブに行ってその土地の物産を買ってきたりしています。`;
  text2.textContent ='くせ毛の方の縮毛矯正やそれにあきてきたロングの方のデジタルパーマ。くせ毛であきらめてしまっている方のスタイルの幅を広げます。';
  text3.textContent = 'お客様が自分でセットする時に「楽チン」「やりやすい」と少しでも再現しやすいようなスタイル作りを考えています。';
  img.src = "img/中村花穂 (2).jpg";
  });
hiroki.addEventListener('click', () => {
  name.textContent = '川上弘樹';
  text1.textContent = `子育て真っ最中 自然の中で思いきり遊んでいます。`;
  text2.textContent ='エレガントなセミロングが得意';
  text3.textContent = '大人から子供まで幅の広い層のお客様の今一番似合うスタイルを提案出来るようにしています。';
  img.src = "img/川上弘樹 (2).jpg";
  });
  
}
