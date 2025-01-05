'use client';
import React, { useState, useEffect ,useCallback } from 'react';
import Header from '@/components/Header';
import KanyaList from '@/components/kanjya/KanjyaList';


export default  function Body() {

//   const patientId = params.id;
//   const { selectedAccount } = useAccount();
  const [isProcessing, setIsProcessing] = useState(false);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
     <div className="p-4">
      <div className="p-4 pb-20">
       <KanyaList></KanyaList>
      </div>
    </div>
  );
}
