export const Physics = (entities, { touches }) => {
  const { player, apples, bullets } = entities;

  // ควบคุมการเคลื่อนไหวของลูกกระสุน
  bullets.forEach(bullet => {
    bullet.position[1] -= 5; // ลูกกระสุนเคลื่อนที่ขึ้น
    if (bullet.position[1] < 0) {
      bullet.position[1] = -10; // ซ่อนลูกกระสุนที่อยู่นอกจอ
    }
  });

  // ตรวจสอบการชนกันระหว่างลูกกระสุนและแอปเปิ้ล
  bullets.forEach(bullet => {
    apples.forEach(apple => {
      const dx = bullet.position[0] - apple.position[0];
      const dy = bullet.position[1] - apple.position[1];
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 20) { // การชนกันระหว่างลูกกระสุนและแอปเปิ้ล
        apple.position = [Math.random() * width, -50]; // รีเซ็ตตำแหน่งของแอปเปิ้ล
        bullet.position = [-10, -10]; // ซ่อนลูกกระสุน
      }
    });
  });

  // ควบคุมการยิงลูกกระสุน
  touches.filter(t => t.type === 'press').forEach(touch => {
    entities.bullets.push({
      position: [player.position[0] + 20, player.position[1]],
      renderer: <Bullet />,
      type: 'bullet'
    });
  });

  return entities;
};
