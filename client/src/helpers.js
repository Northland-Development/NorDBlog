const latin = ["Sed gravida lacus mauris, eget ullamcorper mi suscipit non. Vestibulum auctor aliquam dictum. Nullam tincidunt ultricies ipsum eu malesuada. Donec vel enim lacinia, euismod est sit amet, placerat dolor. Duis consequat, nunc id hendrerit bibendum, massa ante ultrices ante, eu iaculis ipsum nibh eu nisl. Phasellus orci mauris, efficitur vel est non, ornare congue purus. In sed urna arcu. Donec at arcu hendrerit, euismod libero vitae, consequat elit. Phasellus ac risus vitae elit blandit convallis sit amet et velit. Proin quis dui sapien. Maecenas at risus justo. Nullam volutpat rhoncus urna sit amet pretium.",
"Aliquam faucibus nisi in mi cursus faucibus. Etiam a accumsan ante. Phasellus tristique mauris sem, non placerat augue viverra in. Maecenas tristique tellus libero, non efficitur libero tempor in. Fusce fermentum tortor a nulla imperdiet, quis laoreet libero maximus. Praesent sodales purus nisl. Nam congue semper ornare. Vestibulum eleifend lorem et massa ultrices, nec cursus mauris congue. Suspendisse vel arcu non quam blandit dignissim vel at turpis. Mauris sollicitudin magna lectus, et eleifend felis facilisis luctus. Suspendisse id imperdiet sem, nec tempus massa. Donec fringilla ornare mauris, in lacinia urna consequat in. Integer ultrices dui non mauris vulputate, sed commodo purus malesuada. Donec suscipit, lorem eget venenatis aliquet, felis justo fermentum purus, ac pretium odio neque venenatis tellus. Donec ut ipsum metus. Nullam faucibus bibendum sodales.",
"Suspendisse laoreet non ex nec pulvinar. Suspendisse consequat at urna sed dignissim. Proin in lectus bibendum, consequat purus sed, rutrum turpis. Nam condimentum fermentum ex, ut scelerisque dui mattis in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ornare posuere enim, pulvinar dignissim nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sagittis interdum dui, sit amet tempor lectus. Proin aliquam porttitor metus, ut congue orci blandit et. Ut sed sapien ac erat finibus convallis. Nullam placerat viverra aliquet.",
"Praesent mauris urna, vulputate quis justo et, volutpat commodo nisi. Integer commodo dictum mi, non auctor lorem elementum sed. Aenean non odio aliquet, auctor ex eget, porta libero. In ultrices vehicula libero vel vestibulum. Duis venenatis porta ante, sed laoreet libero accumsan vitae. Curabitur ornare velit sit amet mi bibendum pretium. Pellentesque vitae posuere neque. Pellentesque eros nibh, ultrices at erat vehicula, egestas vestibulum enim. Fusce rhoncus pulvinar tortor at aliquam. Curabitur quam nibh, ornare nec pharetra eu, tincidunt id lorem. Donec ultricies vulputate quam, porta feugiat enim aliquet nec. Proin id dolor luctus quam interdum sollicitudin.",
"Etiam quis mollis nunc. Fusce vel dui ac massa feugiat egestas. Morbi condimentum, mi vitae elementum egestas, nibh libero tincidunt leo, quis auctor ipsum massa ac purus. Nunc urna ex, dictum quis ipsum non, semper congue eros. In pretium eleifend erat. Mauris vel urna eget ipsum tristique hendrerit. Vivamus commodo aliquet mi, in rhoncus enim blandit vitae."]

const createPost = (index) => {
  const text = latin[index % latin.length];
  const newDate = () => new Date().toLocaleDateString('en-US');
  const post = {
    created_at: newDate(),
    edited_at: newDate(),
    deleted_at: newDate(),
    text: text,
    user_id: 1,
    id: index
  };
  return post;
};

const createPosts = (numPosts) => {
  const posts = [];
  for (let i=0;i<numPosts;i++){
    posts.push(createPost(i));
  }
  return posts;
}

export {createPosts};