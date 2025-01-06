'use client';
import React, { useState, useEffect ,useCallback } from 'react';
import Header from '@/components/Header';
import KanyaList from '@/components/kanjya/KanjyaList';


export default  function Body() {

  return (
    <div className="p-4 pb-20">
      <KanyaList></KanyaList>
    </div>
  );
}
